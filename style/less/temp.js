/**
 * Created by yakuncyk on 15/7/24.
 */

"use strict";

//(function (t) {
//    return t = t || "none", /^[^, ]*,/.test(t) && (t = t.replace(/(?:,)(?![^(]*\))/g, "")), t
//})((function () {
//    var t = "@{arguments}";
//    return t = t.replace(/^\[|\]$/g, "")
//})())


(function () {
    var t = "@{arguments}";
    return t = t/32;
})();

var a = (function (t) {
    return t = t || "none", /^[^, ]*,/.test(t) && (t = t.replace(/(?:,)(?![^(]*\))/g, "")), t
})(5);

console.log(a);

var value = "5px, 4px, 8px;";
value = value.replace(/(\d)px/g,  function(match, p1) {
    return arguments[1]/32 + 'rem';
});

console.log(value);




