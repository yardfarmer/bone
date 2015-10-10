/**
 * Created by yakuncyk on 15/7/25.
 */

"use strict";

var koa = require('koa');
var app = koa();

app.use(function *(next) {
    // next: GeneratorFunctionPrototype
    var start = new Date();
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms);
});

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});


app.use(function *(){
    this.body = 'hello world';
});

app.listen(8080);