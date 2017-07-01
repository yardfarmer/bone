
function* helloWorldGenerator() {
  // yield 语句
  // yield 语句立即执行
  yield 'hello';
  yield 'world';
  return 'ending';
}

// var hw = helloWorldGenerator();
// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())

function exe() {
  console.log('exe')
  return 'exestr'
}

function* preload() {
  // yield 表达式
  // 遇到yield表达式，就暂停执行后面的操作，
  // 并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值
  // var p = yield exe()
  var p = yield new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('done!')
      resolve({
        done: 'en'
      })
    }, 2000)
  })

  p.then((obj) => {
    console.log('obj', obj)
  })
}

var page = preload()

console.log(page.next())
console.log(page.next())