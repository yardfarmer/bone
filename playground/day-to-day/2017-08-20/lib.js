var counter = 3;

function incCounter() {
  counter ++;
}

function loop() {
  var counter = 3;
  while(--counter > 0) {
    console.log(counter);
  }
}

module.exports = {
  counter: counter,
  incCounter: incCounter,
  loop: loop
};

