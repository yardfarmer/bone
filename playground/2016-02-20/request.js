/**
 * Created by cyk on 16/2/20.
 */

"use strict";
var request = require('request');
var fs = require('fs');
var path = require('path');
var outputFolder = '/Users/yakuncyk/Desktop/panpan/2_out/';

var base64 = require('base64-url');

//base64.decode('Tm9kZS5qcyBpcyBhd2Vzb21lLg');
var index = 0;



setInterval(
    function () {
        download(index++);
    }
    , 2000);

function download(pageIndex) {
    for (var i = pageIndex; i <= pageIndex + 10; i++) {
        var param = 'https://database.duoshuo.com/api/threads/listPosts.json?thread_key=haixiuzu&page=' + i + '&limit=10&v=15.5.20';

        //request
        //    .get('param')
        //    .on('error', function (err) {
        //        console.log(err)
        //    })
        //    .pipe(fs.createWriteStream(path.resolve(outputFolder, 'hi.png')));

        request(param,
            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var info = JSON.parse(body);
                    //console.log(info.parentPosts);

                    for (var key in info.parentPosts) {
                        var elem = info.parentPosts[key];
                        var imgs = JSON.parse(base64.decode(elem.message)).imgs;

                        for (var idx in imgs) {
                            //console.log(imgs[idx]);
                            //(function (picUrl, key, idx) {
                            request
                                .get(imgs[idx])
                                .on('error', function (err) {
                                    console.log(err)
                                })
                                .pipe(fs.createWriteStream(outputFolder + i + '_' + key + '_' + idx + '.png',
                                    {
                                        flags: 'w',
                                        encoding: null,
                                        fd: null,
                                        mode: '0666'
                                    }));

                            console.log(outputFolder + key + idx + '.png', 'saved!');
                            //}(imgs[idx], key, idx))
                        }


                    }
                }
            })
    }
}


console.log(path.resolve(outputFolder, 'a.png'));