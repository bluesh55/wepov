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
  },

  postPoint: function(point) {
    AppDispatcher.dispatch({
      actionType: Constants.POST_POINT,
      point: point
    });
  },

  clickAddPointButton: function() {
    AppDispatcher.dispatch({
      actionType: Constants.CLICK_ADD_POINT_BUTTON
    });
  }
};
