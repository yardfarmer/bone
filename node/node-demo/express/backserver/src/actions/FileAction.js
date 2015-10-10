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
  },
  listFiles: function(data){
    AppDispatcher.handleAction({
      actionType: Constants.FILE_LIST,
      data: data
    })
  },
  getTotalPage: function(data){
    AppDispatcher.handleAction({
      actionType: Constants.PAGER_GET_TOTAL,
      data: data
    })
  },
  getCurrentPage: function(data){
    AppDispatcher.handleAction({
      actionType: Constants.PAGER_GET_INDEX,
      data: data
    })
  }
};