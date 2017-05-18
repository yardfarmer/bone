import d, {
  a,
  b,
  c, 
  foo,
  A,
  e,
  f
} from './export-1'

console.log('a,b,c', a, b, c, d)

foo()

console.log('A', A)

console.log('e', e)

console.log('f:1', f)
setTimeout(() => {
  console.log('f:2', f)
}, 100)