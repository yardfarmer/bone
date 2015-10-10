var cp = require('child_process');


// child_process.fork(modulePath, [args], [options])
// modulePath String `The module` to run in the child
// Return: ChildProcess object
var n = cp.fork(__dirname + '/child.js');

n.on('message', function (m) {
    console.log('PARENT got message:', m);
});

n.send({ hello: 'world' });