/**
 * Created by cyk on 14-6-20.
 */

var ws = require("websocket-server");

var server = ws.createServer();

server.addListener("connection", function (connection) {
    connection.addListener("message", function (msg) {
        server.send(msg);
    });
});

server.listen(8080);