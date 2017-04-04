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
    hg    = spawn('hg', ['--version']),
    grep  = spawn('hg', ['status']);


hg.stdout.on('data', function (data) {


    console.log(data.toString());
//    grep.stdin.write(data)
});

hg.stderr.on('data', function (data) {
    console.log('hg stderr: ' + data);
});

hg.on('close', function (code) {
    if (code !== 0) {
        console.log('hg process exited with code' + code);
    }

    console.log('ok!, code is '+ code);

//    grep.stdin.end();
});

//grep.stdout.on('data', function (data) {
////    console.log('' + data);
//
//    keyword.stdin.write(data);
//});
//
//grep.stderr.on('data', function (data) {
//    console.log('grep stderr: ' + data);
//});
//
//grep.on('close', function (code) {
//    if (code !== 0) {
//        console.log('grep process exited with code ' + code);
//    }
//    keyword.stdin.end();
//});
//
//
//
//
//var keyword = spawn('grep',['usr']);
//
//keyword.stdout.on('data',function(data){
//    console.log('' + data);
//});
//
//keyword.stderr.on('data', function (data) {
//    console.log('keyword stderr: ' + data);
//});
//
//keyword.on('close', function (code) {
//    if (code !== 0) {
//        console.log('keyword process exited with code ' + code);
//    }
//});
