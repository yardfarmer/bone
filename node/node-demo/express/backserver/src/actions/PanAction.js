/**
 * Created by 墨笛 on 15-4-4.
 */

var AppDispatcher = require('../core/Dispatcher');
var Constants = require('../constants/PayloadSources');

export default {

};

export default {
    savePan: function(data){
        AppDispatcher.handleAction({
            actionType: Constants.PAN_SAVE,
            data: data
        })
    },
    listPan: function(data) {
        AppDispatcher.handleAction({
            actionType: Constants.PAN_LIST,
            data: data
        })
    },
    deletePan: function(data) {
        AppDispatcher.handleAction({
            actionType: Constants.PAN_DELETE,
            data: data
        })
    },
    updatePan: function(data) {
        AppDispatcher.handleAction({
            actionType: Constants.PAN_UPDATE,
            data: data
        });
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