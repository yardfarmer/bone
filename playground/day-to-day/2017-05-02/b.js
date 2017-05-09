'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getStockPriceByName = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(name) {
    var ad;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('run it');

            _context.next = 3;
            return getAsyncData();

          case 3:
            ad = _context.sent;


            console.log('en ?', ad);
            return _context.abrupt('return', ad);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getStockPriceByName(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by yakuncyk on 2017/5/2.
 */

function getAsyncData() {
  setTimeout(function () {
    return 'ok';
  }, 3000);
}


getStockPriceByName().then(function (data) {
  console.log('done!', data);
});
