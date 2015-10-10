/**
 * Created by cyk on 14-6-11.
 */

var http = require("http");
var url = require("url");


function start(route,handle) {

    function onRequest(request,response) {

        var pathName = url.parse(request.url).pathname;
        console.log("Request received :"+pathName);
        route(handle, pathName, response, request);
    }

    http.createServer(onRequest).listen(9365);
    console.log("Server has started.");
}

exports.start = start;
