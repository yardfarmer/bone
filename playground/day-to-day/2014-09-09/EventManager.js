/** 事件管理器
使用方法：

  **组件方**
  1. 声明对象
  var obj = {};    
      
  2. 声明事件，并在注释中说明事件参数及其作用
  // a: 参数a
  // b: 参数b
  obj.eventA = new EventManager();  

  // a: 参数a
  // b: 参数b
  // c: 参数c
  obj.eventB = new EventManager();  
      
  3. 触发事件
  obj.eventA.fire(10, 20);
  obj.eventB.fire("a", "b", "c");
  
  **使用方**  
  var user = {};
  user.eventAListener = function(a, b) {...}
  user.eventBListener = function(a, b, c) {...}
  
  obj.eventA.add(user, user.eventAListener);
  obj.eventB.add(user, user.eventBListener);
*/

function EventManager() {
	this.handlers = [];
}

/**
 * 功能：注册事件监听
 * @param obj 事件处理函数所在的对象。如果是全局函数，则填null
 * @param listener  事件处理函数
 */
EventManager.prototype.add = function(obj, listener) {
  var emptyslot;
	for ( var i = 0; i < this.handlers.length; i++) {
		if (!this.handlers[i]) {
		  emptyslot = i;
			continue;
		}

		// 存在严重bug，应严格进行内容对照而不是内存地址比对
		if (this.handlers[i].obj == obj && this.handlers[i].listener == listener) {
			return;
		}
	}

	var handler = {};
	handler.obj = obj;
	handler.listener = listener;
	
	if(emptyslot) {
	  this.handlers[i] = handler;
	} else {
	  this.handlers.push(handler);
	}
};

/**
 * 功能：移除事件监听
 * @param obj 事件处理函数所在的对象。如果是全局函数，则填null
 * @param listener 要删除侦听的事件处理函数
 */
EventManager.prototype.remove = function(obj, listener) {
	for ( var i = 0; i < this.handlers.length; i++) {
		if (!this.handlers[i]) {
			continue;
		}

		if (this.handlers[i].obj == obj	&& this.handlers[i].listener == listener) {
			delete this.handlers[i];
			return;
		}
	}
};

/**
 * 功能：触发事件。函数参数个数任意。具体的参数个数和作用由EventManager实例来定义
 */
EventManager.prototype.fire = function() {
	for ( var i = 0; i < this.handlers.length; i++) {
		if (!this.handlers[i])
			continue;

		this.handlers[i].listener.apply(this.handlers[i].obj, arguments);
	}
};
