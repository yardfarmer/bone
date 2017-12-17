var mod = require('./lib');

console.log(mod.counter);

mod.incCounter();
console.log('-------------')

mod.loop();

console.log('-------------')

mod.loop();

console.log('-------------')
console.log(mod.counter)