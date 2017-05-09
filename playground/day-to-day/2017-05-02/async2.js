/**
 * Created by yakuncyk on 2017/5/2.
 */

function getAsyncData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 3000)
  })
}

async function getStockPriceByName(name) {
  console.log('run it')

  var a = await getAsyncData({ msg: 'from a'})

  console.log('is a Ready ?', a)

  var b = await getAsyncData({ msg: 'from b'})

  console.log('b en ?', b)

  return {
    a, b
  };
}

var result = getStockPriceByName()

console.log('在线等:', result)
console.log('我是吃瓜群众')