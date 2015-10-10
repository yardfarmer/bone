/**
 * Created by 墨峰 on 15/4/15.
 */
/**
 * Created by mofeng.lxw on 15-4-4.
 */
var AppDispatcher = require('../core/Dispatcher');
var Constants = require('../constants/PayloadSources');

export default {
  AddFile: function(data){
    AppDispatcher.handleAction({
      actionType: Constants.FILE_ADDED,
      data: data
    })
  },
  uploadFile: function(data){
    AppDispatcher.handleAction({
      actionType: Constants.File_UPLOADED,
      data: data
    })
  }
};