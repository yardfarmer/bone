/**
 * Created by yakuncyk on 2017/4/4.
 */

var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* (){
  var r1 = yield readFileThunk('/etc/fstab');
  console.log(r1.toString());
  var r2 = yield readFileThunk('/etc/shells');
  console.log(r2.toString());
};

var read = gen();

var r1Result = read.next();
console.log(r1Result)
// read.next();