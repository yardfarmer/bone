/**
 * Created by cyk on 15-4-10.
 */
var fs = require('fs');

var file = './data';

fs.writeFile(file, "let me go.", "utf8", function(err){
    if(err) throw err;
    console.log('It\'s saved! ');
});

fs.readFile(file, {encoding:'utf8'}, function(err,data){
   if(err) throw err;
    console.log(data);
});

// 重命名
//fs.rename(file, file+'_bac', function(){});
fs.stat(file+'_bac', function(err, stat) {
    if(err) {
        console.log('error');
    }
    console.log(stat);
});