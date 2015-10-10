/**
 * 文件表schema
 * @create 2015-03-30
 */


var mongodb = require("./connect");
var Schema = mongodb.mongoose.Schema;
var Promise = require('es6-promise').Promise;

var FileSchema = new Schema({
  nick: String,
  emp_id: String,
  hash: String,
  title: String,
  desc: String,
  html: String,
  url: String,
  ctime: {
        type:Date,
        default:Date.now
  },
  utime: {
    type:Date,
    default:Date.now
  }
},{
  collection:"sandbox"
});
var FileDAO = function(){};
var File = mongodb.mongoose.model("sandbox", FileSchema);

FileDAO.prototype = {
  save: function(obj){
    return new Promise(function(resolve, reject){
      var instance = new File(obj);
      instance.save(function(err){
        if (err) return reject &&reject(err);
        resolve && resolve(instance);
      });
    });
  },
  updateByHash: function(hash, obj){
    return new Promise(function(resolve, reject){
      File.update({hash: hash}, obj, {}, function(err, doc){
          if (err) return reject &&reject(err);
          resolve && resolve(doc);
      });
        console.log(File.find({hash:hash}));
    });
  },
  findById: function(instance){
    return new Promise(function(resolve, reject){
      File.findById(instance, function (err, doc) {
          if (err) return reject &&reject(err);
          resolve && resolve(doc);
      });
    });
  },
  getCount: function(opt){
    return new Promise(function(resolve, reject){
      File.count({
        emp_id: opt.emp_id
      }, function(err, result){
        if(err){
          throw(err);
          reject && reject(err);
          return;
        }
        resolve && resolve(result);
      });
    });
  },
  getList: function(opt){
    var that = this;
    var emp_id = opt.emp_id;
    var page = opt.page || 1;
    var pageSize = opt.pageSize || 6;
    var condition = {};
    if(emp_id){
      condition['emp_id'] = emp_id;
    }
    return new Promise(function(resolve,reject){
      File.find(condition).limit(pageSize).skip((page-1)*pageSize).sort({'ctime':'desc'}).lean().exec(function(err, docs) {
        if(err){
          reject && reject(err);
          return;
        }
        resolve && resolve(docs);
      });
    });
  },
  query: function(opt){
    var that = this;
    return new Promise(function(resolve,reject){
      File.find(opt).limit(1).lean().exec(function(err, docs) {
        if(err){
          reject && reject(err);
          return;
        }
        resolve && resolve(docs[0]);
      });
    });
  },
  getListAndCount: function(opt){
    var that = this;
    return Promise.all([that.getCount(opt), that.getList(opt)]);
  },
  findOneAndRemove: function(opt){
    return new Promise(function(resolve, reject) {
      File.findOneAndRemove(opt, {}, function(err, doc){
        if(err) {
          reject && reject(err);
        }
        resolve && resolve(doc);
      })
    });
  }
};

module.exports = FileDAO;
