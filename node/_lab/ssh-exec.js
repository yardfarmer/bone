/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/9/13
 */

"use strict";

var exec = require('ssh-exec');

//exec('ls ', 'pi@192.168.1.81').pipe(process.stdout);

var connect = {
    user: 'pi',
    host: '192.168.1.81',
    password: '19890801'
};

var commaner = [
    'cd Deskttop',
    'pwd',
    'ls',
    'node'
];

for(var i = 0; i < commaner.length; i++) {
    exec( commaner[i], connect)
        .pipe(process.stdout);
}

//process.stdin
//    .pipe(exec('echo nnnn', connect))
//    .pipe(process.stdout);

//! ok