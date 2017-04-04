/**
 * Created by cyk on 15-4-10.
 */

var http = require('http');
var net  = require('net');
var url  = require('url');

var proxy = http.createServer(function(req, res) {

    console.log("req.url", req.url);
    console.log("req.method", req.method);
    console.log('req.statusCode', req.statusCode);
    console.log('res.statusCode', res.statusCode);
    console.log('-----------------------');
    for(var prop in req) {
        //console.log(prop);
    }

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end('okay <a href="//127.0.0.1:4000/abc">ping</a>');
});


// Emitted when the server has been bound after calling server.listen.
proxy.on('listening', function(){
    console.log('listening ... now!');
});

proxy.on('connection', function() {
    console.log('connection is made.');
});


proxy.on('connect', function(req, cltSocket, head) {
    console.log(' got connected! ');
    socket.write('GET / HTTP/1.1\r\n' +
    'Host: baidu.com\r\n' +
    'Connection: close\r\n' +
    '\r\n');

    socket.on('data', function(chunk) {
        console.log(chunk.toString());
    });

    socket.on('end', function() {
        console.log('proxy.close();');
        proxy.close();
    });
});



proxy.listen(4000);