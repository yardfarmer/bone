function wait(ms) {
  return new Promise(r => setTimeout(r, ms)).then(() => "Yay");
}

// do some work in background.
setInterval(() => 42, 200);

async function test() {
  debugger;
  const hello = "world";
  const response = await fetch('index.html');
  const tmp = await wait(1000);
  console.log(tmp);
  return hello;
}

async function runTest() {
  let result = await test();
  console.log(result);
}