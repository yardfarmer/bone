var co = require('co');

function tick(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let nonStr = new Date() - 0;

      console.log('exe: %s', nonStr);
      resolve(nonStr);
    }, time);
  });
}

function* taskList() {
  yield tick(5000);
  yield tick(2000);
  
  console.log('平行任务');
  return 666
}

co(taskList)
  .then((value) => {
    console.log('v:', value);
  })
  .catch((err) => {
    console.log('err:', err);
  })
