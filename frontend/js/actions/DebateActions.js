var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

module.exports = {
  readDebate: function() {
    AppDispatcher.dispatch({
      actionType: Constants.READ_DEBATE
    });
  }
};
