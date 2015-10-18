/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/17
 */

"use strict";

var should = require('should');
var User = require('./helper/User');
var Connection = require('./helper/Connection');

var db = new Connection();

describe('hooks', function() {

    // 设置最大超时时间
    this.timeout(5000);

    beforeEach('use some description', function(done){
        //console.log('beforeEach');
        db.clear(function(){
            db.save(done);
        });
    });

    afterEach(function(){
        console.log('afterEach');
    });

    describe('#save() with hooks - 1', function() {
        it('should save without error', function(done) {
            var user = new User();
            user.save(done);
        });
    });

    describe('#save() with hooks - 2', function() {
        it('should save without error', function(done) {
            var user = new User();
            user.save(done);
        });
    });
});