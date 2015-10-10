/**
 * Created by cyk on 15/9/19.
 */

'use strict';

var crypto = require('crypto');

var utils = {
    getHash: function (str){
        var shasum = crypto.createHash('md5');
        shasum.update(str);
        return shasum.digest('hex').substr(0,8);
    },
    throttle: function (fn, delay) {
        var timer = null;
        var throttled = function () {
            var context = this, args = arguments;
            throttled.cancel();
            throttled.timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };

        throttled.cancel = function () {
            clearTimeout(throttled.timer);
        };

        return throttled;
    }
};

module.exports = utils;
