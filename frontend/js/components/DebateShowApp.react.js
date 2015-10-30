var React = require('react');

var DebateBanner = require('./DebateBanner.react');
var PointBox = require('./PointBox');
var CommentBox = require('./CommentBox.react');

var DebateActions = require('../actions/DebateActions');
var DebateStore   = require('../stores/DebateStore');


var getStateFromStores = function() {
  return {
    debateData: DebateStore.getDebateData()
  };
};

var DebateShowApp = React.createClass({

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    DebateStore.addChangeListener(this._onChange);
    
    DebateActions.readDebate();
  },

  addPoint: function(point) {
    var debateId = location.pathname.split('/').pop();

    $.post('/points', {
      "point[title]": point,
      "point[debate_id]": debateId
    }, function(data) {
      // 논점 추가 완료
      // data.status == 'ok'
    });
  },

  render: function() {
    return (
      <div>
        
        <DebateBanner />

        <div className="container">
          <PointBox
            addPoint={this.addPoint}
            points={this.state.debateData.points}
            withReason={true}
          />

          <CommentBox />
        </div>

      </div>
    );
  }
});

module.exports = DebateShowApp;
