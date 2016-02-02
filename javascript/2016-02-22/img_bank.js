/**
 * Created by yakuncyk on 16/2/22.
 */




var hsf = require('hsf-client');
var Configclient = require('@alipay/configclient');
var configclient = new Configclient();
var fs = require('fs');

var client = hsf.createClient({
    configclient: configclient
});

configclient.ready(function () {
    console.log('configclient is ready');
});

configclient.on('error', function (err) {
    console.error(err);
});

configclient.on('connection', function (meta) {
    console.log('connection 成功连接', meta);
});

client.invoke({
    id: 'com.alibaba.intl.fileserver.commons.api.service.DfsService:1.0.0',
    group: 'DUBBO',
    method: 'createFileWithBytes',
    args: [
        fs.readFileSync('./img.png'),
        'png'
    ]
}, function (err, result) {
    console.log(err, result);
});
