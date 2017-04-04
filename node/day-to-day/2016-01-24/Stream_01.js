/**
 * Created by yakuncyk on 16/1/24.
 */

var fs = require('fs'),
    stream = require('stream');

// 读取完整数据内容后,在全部输出
var filehandle = fs.readFile('worker2.js', function (err, data) {
    console.log(data);
});

// 删除目录相并减少一个连接数，如果链接数为0并且没有任何进程打开该文件，该文件内容才能被真正删除.
// 但是若有进程打开了该文件，则文件暂时不删除直到所有打开该文件的进程都结束时文件才能被删除。
fs.unlink('worker2.js');


