/**
 * Created by yakuncyk on 16/1/24.
 */

const net = require('net');
process.on('message', function (m, handle) {
    start(handle);
});

var buf = 'hello nodejs';
var res = ['HTTP/1.1 200 ok', 'content-length:' + buf.length].join('\r\n') + '\r\n\r\n' + buf;

function start(server) {
    server.listen();
    server.onconnection = function(err,handle) {
        console.log('got a connection on worker, pid = %d', process.pid);
        var socket = new net.Socket({
            handle: handle
        });
        socket.readable = socket.writable = true;
        socket.end(res);
    }
}