/**
 * Created by cyk on 14-8-20.
 */

if(!Function.prototype.bind) {

    Function.prototype.bind = function(obj) {
        "use strict";

        // 很巧妙的获取了数组的静态方法 slice
        // return a shallow copy of a portion of an array
        // slice: arr.slice(begin[,end])
        var slice = [].slice,
            args  = slice.call(arguments, 1), // begin at 1
            self  = this,
            nop   = function() {},
            bound = function() {
              // 这种用法很巧：
              // (obj || {}) 如果 obj 不为空，即为 true, 则返回 obj，否则返回 {}
              return self.apply.( this instanceof nop ? this : (obj || {}),
                                  // concat 返回一个合并之后的新数组
                                  args.concat(slice.call(arguments))
                                );
            };

        nop.prototype = self.prototype;

        bound.prototype = new nop();

        return bound;
    };
}