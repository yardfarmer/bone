/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/17
 */

"use strict";

function User() {

}

User.prototype.save = function(callback) {
    setTimeout(function(){
        callback();
    }, 10);
};

module.exports = User;