/**
 * Created by mofeng.lxw on 15-4-4.
 */
var AppDispatcher = require('../core/Dispatcher');
var Constants = require('../constants/PayloadSources');

export default {
  preview: function(data){
    AppDispatcher.handleAction({
      actionType: Constants.CODE_PREVIEW,
      data: data
    })
  },
  updateTitle: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.PAN_UPDATETITLE,
      data: data
    });
  }

};