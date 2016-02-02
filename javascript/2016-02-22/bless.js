/**
 * Created by yakuncyk on 16/2/23.
 */
// alibaba.com:
var fileserver = require('fileserver2-ext-node');
var params = {
    site : 'alibaba_v2',
    fileName : 'HTB18mzPLFXXXXXjaXXX760XFXXXy.png'
};

console.log(fileserver().urlBuilder(params));


// http://g03.s.alicdn.com/kf/HT1RJCHFfRbXXagOFbXD.jpg

// aliexpress.com:

//var fileserver = require('node-fileserver2-url');
//
//var params = {
//    site : 'aliexpress',
//    fileName : 'img.png'
//};

//fileserver().urlBuilder(params);
// http://g04.a.alicdn.com/kf/HT1RJCHFfRbXXagOFbXD.jpg

// itao.com
//var fileserver = require('node-fileserver2-url');
//var params = {
//    site : 'itao',
//    fileName : 'HT1RJCHFfRbXXagOFbXD.jpg'
//}
//fileserver().urlBuilder(params);