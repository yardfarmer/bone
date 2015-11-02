# lofty-exposure

文档地址：[exposure文档](http://42.156.172.41/fdevlib/js/lofty/util/exposure/1.0/doc/index.html?t=1437534787373)

> 因为暂时没时间迁移文档和demo，所以直接链接到老文档页面~

> 但是大家注意，文档中的使用组件时所引用的诸如 `fui` / `util` / `alicn` 等通过别名引用的方式，在apm中 **已不再这么使用**，

> apm倡导的直接用组件名，如对于 lofty-class，就直接require('lofty-class')或在依赖中写就好了~

如下代码所示：

```js
// 直接require
var Class = require('lofty-class');

// 在依赖中声明
define('someId'. [
	'lofty-class'
], function(Class) {
	// 使用Class
})
```

更多apm文档：

1. [apm快速开始](http://gitlab.alibaba-inc.com/apm/apm-doc/raw/master/_book/quickstart/pc/quickstart.html)
2. [apm使用组件css](http://gitlab.alibaba-inc.com/apm/apm-doc/raw/master/_book/usage/using-css.html#pc)

