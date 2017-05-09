/**
 * Created by yakuncyk on 2017/5/2.
 */
/**
 * async 标识的 function 默认为返回的是 promise
 *
 */
async function asyncFunc() {
  console.log('run it')
  return 2
}

asyncFunc('asyncFunc').then(data => {
  console.log('done ~:', data)
})

console.log('我是吃瓜群众')