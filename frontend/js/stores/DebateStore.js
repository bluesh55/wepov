var AppDispatcher = require('../dispatcher/AppDispatcher');

var Constants = require('../constants/Constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "change";

var debateData = [];

var DebateStore = assign(EventEmitter.prototype, {

  /* getter */
  getDebateData: function() {
    return debateData;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeLister: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.READ_DEBATE:
      var debateId = location.pathname.split('/').pop();
      var self = this;

      $.get('/debates/' + debateId + '.json', function(data) {
        debateData = data;
        DebateStore.emitChange();
      });


      break;
  }
});

module.exports = DebateStore;
