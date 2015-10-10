/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/9/13
 */

"use strict";

var SSH = require('simple-ssh');

var ssh = new SSH({
    host: '192.168.1.81',
    user: 'pi',
    password: '19890801'
});

ssh.exec('lsasdf', {
    out: function(stdout) {
        console.log(stdout);
    }
}).start();
