/**
 * Created by yakuncyk on 15/7/14.
 */

// jscs:disable
"use strict";
// jscs:enable

/**
 * 方法接受三个参数:
 * 属性所在的对象, 属性的名字, 一个描述对象
 * */

var person = {};

Object.defineProperty(person, "name", {
    writeable: false, // 标识不可写
    value: "yakun.cyk", // 设置默认值
    configurable: false // 标识对象不可再配置, 同样可使属性不可删除
});


//console.log(person.name); // 如果没有 try, 程序就不跑了
//person.name = "Hi";
try{
    person.name = "Hi";
}catch(e) {
    console.log(e);
}

console.log(person.name);



//访问器属性

var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, "date", {
    /**
     * 访问器属性
     * @returns {number}
     */
    get: function() {
        return this._year;
    },

    set: function(newValue) {
        if(this._year > 2000) {
            this._year = newValue;
            this.edition = 3;
        }
    }
});


console.log(book.date);

book.date = 2015;
console.log(book);