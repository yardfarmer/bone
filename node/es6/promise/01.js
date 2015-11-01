/**
 * Created by cyk on 15/10/31.
 */

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 'ms', 'done');
    });
}

timeout(100).then((value)=> {
    console.log(value);
});

function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Count not load image at'));
        };

        image.src = url;
    });
}

loadImageAsync('./pic.png').then(function () {
    console.log('loaded');
}, function (error) {
    console.log('loaded error', error);
});


var getJSON = function (url) {
    var promise = new Promise(function (resolve, reject) {
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });

    return promise;
};

//getJSON("/posts.json").then(function (json) {
//    console.log('Contents: ' + json);
//}, function (error) {
//    console.error('出错了', error);
//});