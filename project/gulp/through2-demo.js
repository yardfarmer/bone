/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/7
 */

var all = [];
var fs       = require('fs'),
    through2 = require('through2');

fs.createReadStream('data.csv')
    .pipe(csv2())
    .pipe(through2.obj(function (chunk, enc, callback) {
        var data = {
            name: chunk[0]
            , address: chunk[3]
            , phone: chunk[10]
        }
        this.push(data)

        callback()
    }))
    .on('data', function (data) {
        all.push(data)
    })
    .on('end', function () {
        doSomethingSpecial(all)
    })