/**
 * Created by 墨笛 on 15-4-4.
 */

var AppDispatcher = require('../core/Dispatcher');
var Constants = require('../constants/PayloadSources');

export default {

};

export default {
    listPan: function(data) {
        AppDispatcher.handleAction({
            actionType: Constants.PAN_VIEW_LIST,
            data: data
        })
    },
     getTotalPage: function(data){
        AppDispatcher.handleAction({
            actionType: Constants.PAGER_VIEW_GET_TOTAL,
            data: data
        })
    },
    getCurrentPage: function(data){
        AppDispatcher.handleAction({
            actionType: Constants.PAGER_ViIEW_GET_INDEX,
            data: data
        })
    }
};