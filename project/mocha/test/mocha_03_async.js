/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/17
 */

"use strict";

var should = require('should');
var User = require('./helper/User');

describe('Async User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User();
            user.save(done);
        });
    });
});