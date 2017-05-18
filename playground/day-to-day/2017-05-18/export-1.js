export var a = 1;
export var b = {
  x: 1
}

export const c = {
  b: 666
}

let d = 888
export default d

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



