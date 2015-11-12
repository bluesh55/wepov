var $ = require('jquery');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "change";

var globalData = {};

var GlobalStore = assign(EventEmitter.prototype, {

  /* getter */
  getGlobalData: function() {
    return globalData;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

function fetchGlobalData() {
  $.get('/api/sessions.json', function(data) {
    globalData = data;

    GlobalStore.emitChange();
  });
}

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.FETCH_GLOBAL_DATA:
      fetchGlobalData();
      break;
  }
});

module.exports = GlobalStore;
