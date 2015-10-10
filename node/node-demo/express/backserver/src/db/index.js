var FileDAO = require("./models/File");
var Promise = require('es6-promise').Promise;

var db = {};

db.save = function(obj) {
  return new Promise(function(resolve, reject){
    FileDAO.save(obj).then(function(instance){
        FileDAO.findById(instance).then(function(doc){
            resolve && resolve(doc);
        });
    });
  });
};

db.updateByHash = function(hash, obj){
    return new Promise(function(resolve, reject){
      FileDAO.updateByHash(hash, obj).then(function(){
        resolve && resolve();
      });
    });
};

db.getFileList = function(opt) {
  return new Promise(function(resolve, reject) {
    FileDAO.getListAndCount(opt).then(function(result){
      resolve && resolve({
        total: result[0],
        list: result[1]
      });
    }).catch(function(err){
      reject && reject(err);
    });
  });
};

db.query = function(opt) {
  return new Promise(function(resolve, reject) {
    FileDAO.query(opt).then(function(doc){
      resolve && resolve(doc);
    }).catch(function(err){
      reject && reject(err);
    });
  });
};

db.del = function(opt) {
  return new Promise(function(resolve, reject) {
    FileDAO.findOneAndRemove(opt).then(function(doc){
      console.log(doc);
      resolve && resolve(doc);
    }).catch(function(err){
      reject && reject(err);
    });
  });
}

module.exports = db;

