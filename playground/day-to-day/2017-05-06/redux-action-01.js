/*
 * Created by yakun.cyk on Sat May 06 2017
 */
import {
  createAction
} from 'redux-actions'

let action1 = createAction('action1')

console.log(action1({
  x: {
    y: 1
  }
}));


let action2 = createAction('action2')
let error
try {
  error = new TypeError('not a number')
} catch (e) {}

console.log(action2(error))
