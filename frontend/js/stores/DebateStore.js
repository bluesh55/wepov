var $ = require('jquery');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "change";

var userData = {};

var debatesData = [];
var debateData = {};
var pointInputState = false;

var DebateStore = assign(EventEmitter.prototype, {

  /* getter */
  getDebatesData: function() {
    return debatesData;
  },

  getDebateData: function() {
    return debateData;
  },

  getUserData: function() {
    return userData;
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

  removeChangeListener: function(callback) {
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
   
    //모든 정보 다시 불러오기
    readDebate();
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

      //모든 정보 다시 불러오기
      readDebate();
    });
}

function readDebate() {
  var debateId = location.pathname.split('/').pop();
  var self = this;

  $.get('/debates/' + debateId + '.json', function(data) {
    debateData = data;
    DebateStore.emitChange();
  });
}

function readDebates() {
  $.get('/debates.json', function(data) {
    debatesData = data;
    DebateStore.emitChange();
  });
}


/* Comment */
function postComment(commentData) {
  $.post('/comments', {
    "comment[debate_id]": commentData.debate_id,
    "comment[comment_id]": commentData.comment_id,
    "comment[content]": commentData.content
  }, function(data) {
    // 댓글 추가 완료
    if(data.status == 200) {
      //모든 정보 다시 불러오기
      readDebate();
    }
  });
}


/* Pros and Cons */
function clickPros(debate_id) {
  var debateId = location.pathname.split('/').pop();

  $.get('/debates/' + debateId + '/pros', function(data) {
    if(data.status == 422) {
    } else {
      readDebate();
    }
  })
}

function clickCons(debate_id) {
   var debateId = location.pathname.split('/').pop();

  $.get('/debates/' + debateId + '/cons', function(data) {
    if(data.status == 422) {
    } else {
      readDebate();
    }
  }); 
}

/* Point */
function editPointTitle(pointData) {
  $.ajax({
    url: '/points/' + pointData.id,
    type: 'put',
    data: {
      title: pointData.edittedTitle
    },
    success: function(data) {
      readDebate();
    }
  });
}

function deletePoint(pointData) {
  $.ajax({
    url: '/points/' + pointData.id,
    type: 'delete',
    success: function() {
      readDebate();
    }
  });
}

/* Mypage */
function fetchUserInfo(user_id) {
  $.get('/profile/' + user_id + '.json', function(data) {
    userData.name = data.name;
    userData.email = data.email;
    userData.intro = data.intro;

    DebateStore.emitChange();
  });
}

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.READ_DEBATES:
      readDebates();
      break;
    case Constants.READ_DEBATE:
      readDebate();
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

    case Constants.POST_COMMENT:
      postComment(action.commentData);
      break;

    case Constants.CLICK_PROS:
      clickPros(action.debate_id);
      break;

    case Constants.CLICK_CONS:
      clickCons(action.debate_id);
      break;

    case Constants.EDIT_POINT_TITLE:
      editPointTitle(action.pointData);
      break;

    case Constants.DELETE_POINT:
      deletePoint(action.pointData);
      break;

    case Constants.FETCH_USER_INFO:
      fetchUserInfo(action.user_id);
      break;
  }
});

module.exports = DebateStore;
