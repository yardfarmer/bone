/**
 * Created by cyk on 15-1-17.
 */



//  The ChildProcess class
//  is not intended to be used directly.
//  Use the spawn() or fork() methods to create a Child Process instance.


//var childProcessClass = require('child_process');
//var childProcesInstance =  require('child_process').fork;

var child_process = require("child_process");

var child = child_process.spawn("ls",{
    stdio: [
        0,
        'pipe',
        2
    ]
});



