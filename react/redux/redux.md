# learn redux

## 要点

- 应用中的所有 state 都以一个对象树的形式存储在一个单一的 store 中。
唯一改变 state 的办法是触发 action, 一个描述发生什么的对象。
为了描述 action 如何改变 state 树，需要编写 `reducers`.

- 当 state 变化时需要返回全新的对象，而不是修改传入的参数。

