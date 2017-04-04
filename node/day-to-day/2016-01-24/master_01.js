/**
 * Created by yakuncyk on 16/1/24.
 */
// 压测工具  ab
//ab -n10000 -c100 http://127.0.0.1:3000/

const net = require('net');
const fork = require('child_process').fork;

var handle = net._createServerHandle('0.0.0.0', 3000);

for (var i = 0; i < 1; i++) {
    fork('./worker').send({}, handle);
}
