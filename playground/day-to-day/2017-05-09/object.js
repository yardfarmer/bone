var myObject = {
  a: 2
}

var b = Object.getOwnPropertyDescriptor(myObject, 'a')

// Object.getOwnPropertyDescriptor()
// {
//   value: 2,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
console.log(b)
