var $ = require('jquery');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "change";

var profileData = {};

var ProfileStore = assign(EventEmitter.prototype, {

  /* getter */
  getProfileData: function() {
    return profileData;
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

/* Mypage */
function fetchProfileData(user_id) {
  $.get('/profile/' + user_id + '.json', function(data) {
    profileData = data;
    ProfileStore.emitChange();
  });
}

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.FETCH_PROFILE_DATA:
      fetchProfileData(action.user_id);
      break;
  }
});

module.exports = ProfileStore;
