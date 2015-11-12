var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

module.exports = {
  fetchGlobalData: function() {
    AppDispatcher.dispatch({
      actionType: Constants.FETCH_GLOBAL_DATA
    });
  }
};
