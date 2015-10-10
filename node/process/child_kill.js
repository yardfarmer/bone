/**
 * Created by cyk on 15-1-17.
 */



//  The ChildProcess class
//  is not intended to be used directly.
//  Use the spawn() or fork() methods to create a Child Process instance.


//var childProcessClass = require('child_process');
//var childProcesInstance =  require('child_process').fork;

var spawn = require("child_process").spawn,
    grep  = spawn('grep',['ssh']);

grep.on('close',function(code,signal){
    console.log("child process terminated  due to signal "+ signal);
});

grep.on("message",function(m){
    console.log(m);
})

// grep.kill('SIGHUP');
// or
// grep.kill();



