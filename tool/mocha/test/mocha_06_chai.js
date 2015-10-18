/**
 * Created by cyk on 15/10/17.
 */

"use strict";

var expect = require('chai').expect;


var Tea = function (name) { this.name = name; }
    , Chai = new Tea('chai');

describe('Use chai expect', function() {
    describe('#expect', function() {
        it('instanceof usage', function() {
            expect(Chai).to.be.an.instanceof(Tea);
            expect([1,2,3]).to.be.an.instanceof(Array);
        });
    });
});