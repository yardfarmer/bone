/**
 * Created by cyk on 15-1-17.
 */



//  The ChildProcess class
//  is not intended to be used directly.
//  Use the spawn() or fork() methods to create a Child Process instance.


//var childProcessClass = require('child_process');
//var childProcesInstance =  require('child_process').fork;


//  ps ax | grep ssh

var spawn = require('child_process').spawn,
    ps    = spawn('ps', ['ax']),
    grep  = spawn('grep', ['ssh']);


ps.stdout.on('data', function (data) {
    grep.stdin.write(data)
});

ps.stderr.on('data', function (data) {
    console.log('ps stderr: ' + data);
});

ps.on('close', function (code) {
    if (code !== 0) {
        console.log('ps process exited with code' + code);
    }

    grep.stdin.end();
});

grep.stdout.on('data', function (data) {
//    console.log('' + data);

    keyword.stdin.write(data);
});

grep.stderr.on('data', function (data) {
    console.log('grep stderr: ' + data);
});

grep.on('close', function (code) {
    if (code !== 0) {
        console.log('grep process exited with code ' + code);
    }
    keyword.stdin.end();
});




var keyword = spawn('grep',['usr']);

keyword.stdout.on('data',function(data){
    console.log('' + data);
});

keyword.stderr.on('data', function (data) {
    console.log('keyword stderr: ' + data);
});

keyword.on('close', function (code) {
    if (code !== 0) {
        console.log('keyword process exited with code ' + code);
    }
});
