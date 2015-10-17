/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/17
 */

"use strict";

function Connection() {

}

Connection.prototype.clear = function(callback) {
    setTimeout(function() {
        callback();
    }, 500);
};

Connection.prototype.save = function(callback) {
    setTimeout(function() {
        callback();
    }, 500);
};

module.exports = Connection;