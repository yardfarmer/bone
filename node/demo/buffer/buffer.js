/**
 * Created by cyk on 14-6-25.
 */

// var buf = new Buffer("test");
// var json = JSON.stringify(buf);
// console.log(json);


// buf = new Buffer(256);
// len = buf.write('\u00bd + \u00bc = \u00be', 0);
// console.log(len + " bytes: " + buf.toString('utf8', 0, len));

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97; // 97 is ASCII a
}

console.log(
    buf.toString('ascii'),
    '/',
    buf.toString('utf8'),
    buf.length
);


var str = "我们是中国人,阿里巴巴.",
    buf2 = new Buffer(str),
    buf3 = new Buffer(100); //

    buf3.write(str, 'utf8');

console.log(
    str.length, // 字符串的字符数
    buf2.length, // 字符串的实际字符数

    // 返回字符串的实际字节数
    Buffer.byteLength(str, encoding='utf8'),

    // 不要上面的 buf2.length 等同于字符串的实际字节数
    // 其实它是凑巧了
    // .length 不是字节大小, 而是内存大小
    // 不随 buffer 中存放了多少内容而改变
    buf3.length,
    buf3.toString('utf8',0, 32)
);
