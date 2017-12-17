/**
 * Created by cyk on 15/10/31.
 */

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

// timeout(100).then((value) => {
//   console.log(value);
// });

function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('img src');
    }, 1000);
  });
}

loadImageAsync('./pic.png').then(function () {
  console.log('loaded');
}, function (error) {
  console.log('loaded error', error);
});


// var getJSON = function (url) {
//   var promise = new Promise(function (resolve, reject) {
//     var client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//     function handler() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//   });

//   return promise;
// };

//getJSON("/posts.json").then(function (json) {
//    console.log('Contents: ' + json);
//}, function (error) {
//    console.error('出错了', error);
//});