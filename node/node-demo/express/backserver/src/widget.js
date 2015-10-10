/**
 * Created by yakun.cyk on 15/9/11.
 */
var request = require('request');
//var config = require('../config');
var utils = require('util');
var http = require('http');
var fs = require('fs');
var path = require('path');
var DB = require('./db/index');
var moment = require('moment');
var utility = require('./utils');
var formidable = require('formidable');
var _ = require('lodash');

var ENV = process.env;

/**
 * canvas img upload
 * @param req
 * @param res
 */
function upload(req, res){

    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = 'public/assets/';
    form.keepExtensions = true;
    form.maxFieldsSize = 10 * 1024 * 1024;

    form.parse(req, function(err, fields, files) {

        if (err) {
            res.locals.error = err;
            res.render('index', { title: TITLE });
            return;
        }
        var extName = '';
        switch (files.image.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }

        if(extName.length == 0){
            res.locals.error = '只支持png和jpg格式图片';
            res.render('index', { title: '不是图片' });
            return;
        }

        var imgName = (Math.random()*10).toString().replace('.','') + '.' + extName;
        var newPath = form.uploadDir + imgName;

        console.log(newPath);
        fs.renameSync(files.image.path, newPath);  //重命名

        res.end(JSON.stringify({
            'ok': true,
            'url': newPath
        }))
    });
}

function save(req, res){
    var value = req.body.value;
    var type = req.body.type;
    var id = req.body.id;
    var title = req.body.title;
    DB.save({
        'emp_id': req.session['emp_id'],
        'nick': req.session['nickName'],
        'title': title,
        //'hash': utility.getHash((+new Date) + req.session['emp_id']+ req.session['nickName']+process.hrtime()),
        'html': value,
        'ctime': moment().format("YYYY-MM-DD HH:mm")
    }).then(function(doc){
        res.end(JSON.stringify({
            'err': 0,
            'msg': '保存成功',
            'data': {
                'id': doc['hash']
            }
        }))
    })
}


function update(req, res){
  var value = req.body.value;
  var hash = req.params.id;
  var title = req.body.title;
  var data = {
    'title': title,
    'utime': moment().format("YYYY-MM-DD HH:mm")
  }
  if(typeof value != undefined){
    data['html'] = value;
  }
  DB.updateByHash(hash, data).then(function(doc){
    res.end(JSON.stringify({
      'err': 0,
      'msg': '保存成功',
      'data': {
        'hash': hash
      }
    }));
  })
}

function forkBin(req, res){
  var hash = req.params.id;
  DB.query({
    'hash': hash
  }).then(function(doc){
    //var newHash = ''; utility.getHash((+new Date) + req.session['emp_id']+ req.session['nickName']+process.hrtime());
      DB.save({
        title: doc['title'],
        desc: doc['desc'],
        //hash: newHash,
        'emp_id': req.session['emp_id'],
        'nick': req.session['nickName'],
        'html': doc['html'],
        'ctime': moment().format("YYYY-MM-DD HH:mm"),
        'source': hash,
        data: doc['html']
      }).then(function(){
        res.end(JSON.stringify({
          'err': 0,
          'data': {
            //url: `/bin/${newHash}/edit`
          }
        }));
      });

  });
}

exports.upload = upload;
exports.save = save;
exports.update = update;
exports.forkBin = forkBin;







