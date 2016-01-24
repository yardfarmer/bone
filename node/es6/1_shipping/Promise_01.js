/**
 * Created by yakuncyk on 16/1/24.
 */
var promiseCount = 0;
function testPromise() {
    //var thisPromiseCount = ++promiseCount;

    var p1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('inner');
            //resolve({x: 1, y: 2});
        }, 10);
    });

    p1.then(function(val) {
        console.log(val, 'this is ok');
    })

}

testPromise();