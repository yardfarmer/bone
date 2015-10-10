var events =  require('events')
var util = require('util')

var Observer = function() {
    events.EventEmitter.call(this)
}
util.inherits(Observer, events.EventEmitter)

module.exports = Observer