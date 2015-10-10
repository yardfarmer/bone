/**
 * Created by cyk on 14-6-11.
 */

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var mockDataHandler = require("./mockDataHandler");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/data"] = mockDataHandler.doGet;

server.start(router.route,handle);
