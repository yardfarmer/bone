var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve({
        data: fileName
      });
    }, 300);
  });
};

var asyncReadFile = async function () {
  console.log(1);

  var f1 = await readFile('/etc/fstab');
  var f2 = await readFile('/etc/shells');
  
  console.log(2);
  console.log(f1.data.toString());
  console.log(f2.data.toString());

  return Promise.resolve({
    data: f1.data + f2.data
  })
};

asyncReadFile().then((data) => {
  console.log('final', data)
});
console.log('3');