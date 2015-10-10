//从缓存读取上次关闭时的状态
function Cache(storageObject) {
    this._storageObject = storageObject
}

Cache.prototype = {

    get : function(name, defaultValue) {
        var cache = this._storageObject.getItem(name)
        cache = JSON.parse(cache)
        return cache || defaultValue
    },

    set : function(name, value) {
        var cache = JSON.stringify(value)
        this._storageObject.setItem(name, cache)
    },

    remove : function(name) {
        this._storageObject.removeItem(name)
    },

    clean : function() {
        var self = this
        Object.keys(this._storageObject).forEach(function(key) {
            self.remove(key)
        })
    }
}

module.exports = Cache
