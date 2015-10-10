/**
 * Created by mofeng.lxw on 15-4-4.
 */
var AppDispatcher = require('../core/Dispatcher');
var Constants = require('../constants/PayloadSources');

export default {
  hashChange: function(data){
    AppDispatcher.handleAction({
      actionType: Constants.HASH_CHANGE,
      data: data
    })
  }
};