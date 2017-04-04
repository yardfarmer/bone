/**
 * Created by yakuncyk on 16/1/23.
 */

var EE = require('events').EventEmitter;
var ee = new EE();

var die = false;

ee.on('die', function() {
   die = true;
});

setTimeout(function () {
    ee.emit('die');
}, 100);

// Node.js 同时只处理一件事
while(!die) {}

console.log('never be called!');