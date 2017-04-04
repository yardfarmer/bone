/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/12/19
 */

"use strict";

//适配器模式

var oracle = {
    store: function () {

    }
};


var mysql = {
    store: function () {

    }
};

// 统一对外接口, 适配器接口, 适配器模式
function DB(db, operation) {
    db.store(operation);
}