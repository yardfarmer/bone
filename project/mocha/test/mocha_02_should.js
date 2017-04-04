/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/10/17
 */

"use strict";

var should = require('should');

describe('Array use should', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(0).should.equal(-1);
            [1,2,3].indexOf(3).should.equal(2);
        });
    });
});