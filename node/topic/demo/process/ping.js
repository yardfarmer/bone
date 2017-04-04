/**
 * Created by cyk on 15-1-17.
 */



//  The ChildProcess class
//  is not intended to be used directly.
//  Use the spawn() or fork() methods to create a Child Process instance.


//var childProcessClass = require('child_process');
//var childProcesInstance =  require('child_process').fork;

var childProcess = require('child_process');

var spawn   =  childProcess.spawn,
      ip    =  'localhost',
    ping    =  spawn('cat', [ip]),

    other   =  childProcess.fork();

//ping.stdout.on('data',function(data){
//    console.log('stdout:'+ data);
//});
//
//ping.stderr.on('data',function(data){
//    console.log('stderr'+ data);
//});
//
//ping.on('close',function(code){
//    console.log('child process exited with code '+ code);
//});



var cp = require('child_process');

var n = cp.fork(__dirname + '/sub.js');

n.on('message', function(m) {
    console.log('PARENT got message:', m);
});

n.send({ hello: 'world' });