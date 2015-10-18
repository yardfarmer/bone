/**
 * Created by cyk on 15-1-17.
 */



//  The ChildProcess class
//  is not intended to be used directly.
//  Use the spawn() or fork() methods to create a Child Process instance.


//var childProcessClass = require('child_process');
//var childProcesInstance =  require('child_process').fork;


var spawn = require('child_process').spawn,
    ls    = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data',function(data){
    console.log('stdout:'+ data);
});

ls.stderr.on('data',function(data){
    console.log('stderr'+ data);
});

ls.on('close',function(code){
    console.log('child process exited with code '+ code);
});



