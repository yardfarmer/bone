/**
 *
 * Created by cyk on 14-8-19.
 */


var Controller = {};

// 使用匿名函数来封装一个作用域,避免对全局作用域造成污染
// users控制器,放在 Controller 变量下的命名空间
(Controller.users = function() {
    "use strict";

    var nameClick = function() {
        alert($(this).text());
    };

    // 在页面加载时绑定事件监听
    $(function(){
       $("#view .name").click(nameClick);
    });

})(jQuery);


