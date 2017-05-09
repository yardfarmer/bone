/**
 * Created by yakuncyk on 2017/5/2.
 */


var sum = [1, 2, 3, 4].reduce((a, b) => {
  console.log(a, b)
  return a + b;
}, 0)

console.log(sum);


var list1 = [[0, 1], [2, 3], [4, 5]];
var list2 = [
  0,
  [ 1,
    [ 2,
      [ 3,
        [ 4,
          [ 5 ]
        ]
      ]
    ]
  ]
];

var flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);


var a = flatten(list2)

console.log(a)

