/**
 * Created by Andy on 15/3/30.
 */
var mongoose = require('mongoose');
var dbConfig = require('../../config').mongo;
var dbOptions = dbConfig.options;


var getUrl = function(){
  return ["mongodb://",
    process.env.db_username,":",
    process.env.db_password,"@",
    process.env.db_host,":",
    dbConfig.port,"/",
    process.env.db_name].join("");
};
var dbUrl = getUrl();
mongoose.connect(dbUrl, dbOptions);
exports.mongoose = mongoose;
