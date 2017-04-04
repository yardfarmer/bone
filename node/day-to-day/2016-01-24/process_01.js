/**
 * Created by yakuncyk on 16/1/24.
 */


// 使用事件的方式处理异常
// 最后的防线了
// 虽然程序不会停, 但是正常的执行流会被打断
process.on('uncaughtException', function (err) {
    console.log('cache exception', err);
});

setTimeout(function () {
    console.log('run');
}, 10);

function func() {

    // 抛出异常后, 会被 process catch 住, 但是后续的执行流中断了
    //try{
        throw Error( 'stop!');
    //} catch(e) {
    //   console.log('cat');
    //}
}

func();

// 下面的代码不会被执行
setTimeout(function () {
    console.log('run2');
}, 10);

console.log(process, 1);

