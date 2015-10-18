/**
 * Created by cyk on 15/10/17.
 */

"use strict";

var expect = require('chai').expect;

describe('Array Prototype', function () {
    var fruits;
    before(function () {
        fruits = ["Apple", "Banana"];
    });
    describe('#copy()', function () {
        it('this is how to make a copy', function () {
            var shallowCopy = fruits.slice();
            expect(shallowCopy).to.deep.equal(fruits);
        });
    });


    describe('#Array.prototype.filter()', function () {
        it('create a new array', function () {

            /**
             * return true of false
             * @param value
             * @returns {boolean}
             */
            function isBigEnough(value) {
                return value > 2;
            }

            // return a new array
            var bigger = [1, 2, 3, 4, 5, 6].filter(isBigEnough);

            expect(bigger).to.deep.equal([3, 4, 5, 6]);
        });


        describe('#Array.prototype.map()', function () {
            it('create a new array', function () {

                /**
                 * return new calculated value
                 * @param value
                 */
                function double(value) {
                    return value * 2;
                }

                // return a new array
                var bigger = [1, 2, 3].map(double);

                expect(bigger).to.deep.equal([2, 4, 6]);
            });
        });


        describe('#Array.prototype.reduce()', function () {
            // 减少到最终成为单一的值
            it('reduce array to a single value.', function () {

                /**
                 *  迭代计算
                 * @param previousValue 上一次遍历值
                 * @param currentValue  当前遍历值
                 * @param index 索引
                 * @param array 正在遍历的数组
                 * @returns {number}
                 */
                function calculate(previousValue, currentValue, index, array) {
                    return previousValue + currentValue;
                }

                // return a new array
                var bigger = [1, 2, 3].reduce(calculate);

                expect(bigger).to.deep.equal([1, 3, 5]);
            });
        });


    })
});