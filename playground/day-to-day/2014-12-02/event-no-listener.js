// 绝云问: 如果给单纯的对象加入事件,怎么做?  
// 我想到了 jQ, addEventListener, emmit ... , 仍有很到差距啊

var PubSub = {
	subscribe: function(ev, callback) {
		// 创建 _callbacks 对象,除非已有
		var calls = this._callbacks || (this._callbacks = {});
		(this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
		return this;
	},
	publish: function() {
		var args = Array.prototype.slice.call(arguments,0);

		// 拿出第一个参数, 因为第一个参数用于事件名称
		var ev = args.shift();

		var list, calls, i, lst;
		// 不存在该事件,则返回
		if (!(calls = this._callbacks)) return this;
		if (!(list = this._callbacks[ev])) return this;

		for( i = 0, lst = list.length; i < lst; i++ ) {
			list[i].apply(this, args);
		}
		return this;
	}
}



