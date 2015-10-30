var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

module.exports = {
  readDebate: function() {
    AppDispatcher.dispatch({
      actionType: Constants.READ_DEBATE
    });
  },

  postReason: function(reason) {
    AppDispatcher.dispatch({
      actionType: Constants.POST_REASON,
      reason: reason
    });
  }
};
