/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/9/8
 */

"use strict";

var Service = require('node-mac').Service;

// Create a new service object
var svc = new Service({
    name:'Hello World',
    description: 'The nodejs.org example web server.'
    //script: '/path/to/helloworld.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    svc.start();
});

svc.install();