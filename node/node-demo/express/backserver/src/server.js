'use strict';
var _ = require('lodash');
var fs = require('fs');
var http = require('http');
var request = require('request');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var express = require('express');
var moment = require('moment');
var assign = require('lodash.assign');


var sys_config = require('../private');

process.env = assign(sys_config, {
  NODE_ENV: 'development'
}, process.env);

//var config = require('../config');
//var Dispatcher = require('./core/Dispatcher');;
//var ActionTypes = require('./constants/ActionTypes');
//var AppStore = require('./stores/AppStore');
var DB = require('./db/index');
var widget = require('./widget');

var server = express();
server.set('view engine', 'jade');
server.set('port', (process.env.PORT || 5000));
server.use(cookieParser());
server.use(express.static(path.join(__dirname)));

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

server.use(session({
  secret: 'tfs_client',
  resave: false,
  saveUninitialized: true
}));
 

/**
 * route
 */

server.get('/', function(req, res) {
    res.send('200 ok');
});

server.get('/api/page/*', function(req, res) {
  var urlPath = req.path.substr(9);
  res.send(urlPath);
});


server.get('/public/assets/*', function(req, res) {
  var urlPath = req.path.substr(0);
  res.send(urlPath);
});


//
// Server-side rendering
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it

server.post('/upload', function (req, res) {
  widget.upload(req, res);
});

server.post('/bin/:id/fork', function (req, res) {
  widget.forkBin(req, res);
});

server.get('/api/list/:page', function(req, res) {
  var page = req.params.page || 1;
  var emp_id = req.session['emp_id'];
  var pageSize = req.params.pageSize || 6;

  DB.getFileList({
    order: [['ctime', 'DESC']],
    page: page,
    pageSize: pageSize
  }).then(function(result){
    var rows = [];
    result.list.forEach(function(row){
      var value = {};
      value.utime = moment(new Date(row.utime)).format("YYYY-MM-DD HH:mm:ss");
      value.hash = row['hash'];
      //value.path = `/bin/${value.hash}/runner`;
      value.key = row['_id'];
      value.title = row['title'] || 'default';
      value.desc = row['desc'] || 'default';
      rows.push(value);
    });
    res.end(JSON.stringify({
      err:0,
      msg:'查询成功',
      data: {
        rows: rows,
        total: result['total'],
        pageSize: pageSize
      }
    }));
  }).catch(function(e){

      console.log(e);
  });
});


//// Load pages = require( the `/src/content/` folder into the AppStore
//(function() {
//  var fm = require('front-matter');
//  var jade = require('jade');
//  var sourceDir = path.join(__dirname, './content');
//  var getFiles = function(dir) {
//    var pages = [];
//    fs.readdirSync(dir).forEach(function(file) {
//      var stat = fs.statSync(path.join(dir, file));
//      if (stat && stat.isDirectory()) {
//        pages = pages.concat(getFiles(file));
//      } else {
//        // Convert the file to a Page object
//        var filename = path.join(dir, file);
//        var url = filename.
//          substr(sourceDir.length, filename.length - sourceDir.length - 5)
//          .replace('\\', '/');
//        if (url.indexOf('/index', url.length - 6) !== -1) {
//          url = url.substr(0, url.length - (url.length > 6 ? 6 : 5));
//        }
//        var source = fs.readFileSync(filename, 'utf8');
//        var content = fm(source);
//        var html = jade.render(content.body, null, '  ');
//        var page = assign({}, {path: url, body: html}, content.attributes);
//        Dispatcher.handleServerAction({
//          actionType: ActionTypes.LOAD_PAGE,
//          path: url,
//          page: page
//        });
//      }
//    });
//    return pages;
//  };
//  return getFiles(sourceDir);
//})();

server.listen(server.get('port'), function() {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});

