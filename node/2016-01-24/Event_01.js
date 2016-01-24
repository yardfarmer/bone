/**
 * Created by yakuncyk on 16/1/24.
 */

var utils        = require('util'),
    EventEmitter = require('events').EventEmitter;

var Server = function () {
    console.log('init');
};

utils.inherits(Server, EventEmitter);

var s = new Server();
s.on('abc', function (data) {
    console.log('abc', data);
});

s.emit('abc', [1,3,6]);