var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

module.exports = {
  readDebate: function() {
    AppDispatcher.dispatch({
      actionType: Constants.READ_DEBATE
    });
  },

  readDebates: function() {
    AppDispatcher.dispatch({
      actionType: Constants.READ_DEBATES
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
  },



  /* Comment */
  postComment: function(commentData) {
    AppDispatcher.dispatch({
      actionType: Constants.POST_COMMENT,
      commentData: commentData
    });
  },

  /* Pros and Cons */
  clickPros: function(debate_id) {
    AppDispatcher.dispatch({
      actionType: Constants.CLICK_PROS,
      debate_id: debate_id
    });
  },

  clickCons: function(debate_id) {
    AppDispatcher.dispatch({
      actionType: Constants.CLICK_CONS,
      debate_id: debate_id
    });
  }
};
