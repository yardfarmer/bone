/**
 * Created by yakuncyk on 2017/3/19.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['b'], factory)
  } else {
    root.amdWeb = factory(root.b)
  }
}(this, function (b) {
  // use b in some fashion

  // 转换正常代码到 define -> amd 模块
}))