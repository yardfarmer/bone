export var a = 1;
export var b = {
  x: 1
}

export const c = {
  b: 666
}

// // 默认导出
// export default {
//   D: 'Ha',
//   E: 'En'
// }

export function foo() {
  console.log('foo exe')
}

export {
  a as A
}

let e = 999
export { e }

export let f = '000'

setTimeout(() => {
  f = 111
}, 10)



