
/**
 * Created by cyk on 15-4-10.
 */
var path = require('path');


// 去掉多余斜线,  根据点号算相对路径
var rst = path.normalize('/foo/bar///////baz/asdf/../../..');
console.log(rst);

// `..` 网上跳一级
var joinPath = path.join('foo', '/bar/a/', '..', 'baz/asdf', 'quux', '.');
console.log(joinPath);



// 原理理解成 shell cd
// cd /foo/bar
// cd /tmp/file  # 从 /foo/bar 重新跳到 /tmp/file ,第一个斜线表示 linux 根目录
var rp = path.resolve('/foo/bar', '/tmp/file/', '..', 'a/subfile')
console.log('rp->', rp);
// rp-> /tmp/a/subfile


//  `/foo/bar` 相当于使用了 linux 的绝对路径,因为带第一个斜线
var rp1 = path.resolve('/foo/bar','./baz');
console.log('rp1->', rp1);


// 如果没有指定绝对路径,则使用当前文件的所在路径
var rp2 = path.resolve('www', 'root', 'gif');
console.log('rp2->', rp2);


// 当前文件所在地址, 与执行地址无关
console.log("dirName:->", __dirname);
console.log("fileName:->", __filename);

console.log("path.delimiter", path.delimiter);

var envPath = process.env.PATH.split(path.delimiter);

//console.log(process.env.PATH);
//console.log(envPath);

// 与当前文件所在地址无关, 与执行地址相关
var relativePath = path.relative('/a/b/c', './a/b/c/d/e');
console.log('relativePath:', relativePath);

var dirName = path.dirname('./a/b/c/d/e');
console.log('dirname:', dirName);

var baseName = path.basename('/foo/bar/baz/asdf/quux.html')
// returns
//'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// returns
// 'quux'

// similar to java File.separator
console.log('separator ', 'foo/bar/baz'.split(path.sep));


