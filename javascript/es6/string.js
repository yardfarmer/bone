/**
 * Created by cyk on 15-4-22.
 */

//var s = "吉";
//
//console.log(s.length
//    ,s.charAt(0)
//    , String.fromCharCode(134071)
//    //s.charAt(1)
//);

var s = "hello world";

console.log(
    s.startsWith("hello"),
    s.endsWith("ld"),
    //s.contains('o'),  // 尚不支持
    "x".repeat(3)
);

var str = "aaa_aa_a";

//var r1 = /a+/g;
//// 还不支持
//var r2 = /a+/y;
//
//console.log(
//    r1.exec(str),
//    r2.exec(str),
//    "----------",
//    r1.exec(str),
//    r2.exec(str)
//);


var ms = `
 beautful
    girl.
`;

console.log(ms);


// string template
var name = "Bob", time = "today";
var tpl  = `Hello ${name}, how are you ${time} ?`;

console.log(tpl);


var x = 1;
var y = 2;
var add = `${x} + ${y} = ${ x + y}`;

console.log(add);


var userInfo = {
    name: "john",
    age: 19,
    hobby: [
        'sing', 'reading'
    ]
};

var personInfo = `
        person info(object is ok)

    name is ${userInfo.name}

    and ${userInfo.age} years old, like ${userInfo.hobby}`;

console.log(personInfo);



