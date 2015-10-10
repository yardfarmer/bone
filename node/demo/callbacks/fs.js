/**
 * Created by cyk on 15-6-16.
 */

var fs = require('fs');
fs.open(__dirname+'/b.txt', 'r', function(err, content ){
   console.log(content);
});