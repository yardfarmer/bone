/**
 * Created by yakuncyk on 16/2/23.
 */

var tpsUploader = require("tps-upload");

tpsUploader.upload('a',"/Users/yakuncyk/Desktop/a.png",function(info){
    console.log(info);
},function(err){
    console.log(err);
});