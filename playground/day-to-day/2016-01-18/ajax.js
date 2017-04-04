/**
 * @fileOverview
 * @author yakuncyk
 * @version 16/1/18
 */

"use strict";

var $ = require('jquery');
var dtd = $.Deferred();

dtd.resolve();
dtd.done(function () {
    console.log('done');
});