var AppDispatcher = require('../dispatcher/AppDispatcher');

var Constants = require('../constants/Constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "change";

var debateData = [];
var pointInputState = false;

var DebateStore = assign(EventEmitter.prototype, {

  /* getter */
  getDebateData: function() {
    return debateData;
  },

  getPointInputState: function() {
    return pointInputState;
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

function postReason(reason) {
  $.post('/reasons', {
    "reason[point_id]": reason.point_id,
    "reason[is_pros]": reason.is_pros,
    "reason[title]": reason.title,
    "reason[content]": reason.content
  }, function(data) {
    
    DebateStore.emitChange();
  });
}

function postPoint(point) {
    $.post('/points', {
      "point[title]": point.title,
      "point[debate_id]": point.debate_id
    }, function(data) {
      // 논점 추가 완료
      // data.status == 'ok'

      pointInputState = false;
      DebateStore.emitChange();
    });
}

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
    case Constants.POST_REASON:
      postReason(action.reason);
      break;
    case Constants.POST_POINT:
      postPoint(action.point);
      break;

    case Constants.CLICK_ADD_POINT_BUTTON:
      pointInputState = true;
      DebateStore.emitChange();
      break;
  }
});

module.exports = DebateStore;
