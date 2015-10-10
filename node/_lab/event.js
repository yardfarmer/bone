/**
 * Created by cyk on 15-4-10.
 */


// 该模块用于编写程序的单元测试用例
var event = require('events');
var EEmitter = event.EventEmitter;

// console.log(EEmitter); // EEmitter is a Class

var emitter = new EEmitter();  // EventEmitter object

// 针对单个对象设置监听器个数, 设置 0 表示不限制个数
emitter.setMaxListeners(13);
//console.log(emitter.addListener);

emitter.addListener('drink', function(){
    console.log('hava a drink');
});


var callback = function () {
    console.log('site down, have a drink');
};

function addListener() {
    emitter.on('drink', callback);
}
addListener();
addListener();
addListener();


emitter.once('drink', function() {
    console.log('drink only once');
})

var listenerCount = EEmitter.listenerCount(emitter, 'drink');
console.log('listenerCount:', listenerCount);

// 移除监听, 如果同一个监听被添加了多次,移除的时候每次只能移除一个监听,
// 需要多次移除
// If any single listener has been added multiple times to the listener array
// for the specified event, then removeListener must be called multiple times to remove each instance.
emitter.removeListener('drink', callback);
emitter.removeListener('drink', callback);
//emitter.removeListener('drink', callback);


// 一次性移除所有监听器
//emitter.removeAllListeners('drink');

// 根据事件,找出对应的监听器数组
//emitter.listeners('drink');

// 触发事件
emitter.emit('drink');



listenerCount = EEmitter.listenerCount(emitter, 'drink');
console.log('listenerCount:', listenerCount);


