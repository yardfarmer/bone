/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/17
 */

"use strict";

var should = require('should');
var User = require('./helper/User');

describe('hooks', function() {
    before(function(){
        console.log('before');
    });

    after(function(){
        console.log('after')
    });

    beforeEach('use some description', function(){
        console.log('beforeEach');
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