/**
 * Created by cyk on 15-6-17.
 */

var fs = require('fs');

fs.watchFile('message.txt', function(cur, prev) {
    console.log('the current mtime is: ' + cur.mtime, cur);
    console.log('the previous mtime was: ' + prev.mtime);
});


// 这里的回调是异步的
fs.stat('message.txt', function(err, stat) {
    console.log(
        //stat,
        stat.isFile(),
        stat.isDirectory(),
        stat.isBlockDevice(),
        stat.isCharacterDevice(),
        stat.isSymbolicLink()
    );
});

// 上面的方法是异步的, 所以这里会先执行结束
//console.log(process.cwd(), process);