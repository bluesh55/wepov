var React = require('react');

var DebateBanner = require('./DebateShowApp/DebateBanner.react');
var PointBox = require('./DebateShowApp/PointBox');
var CommentBox = require('./DebateShowApp/CommentBox.react');

var DebateActions = require('../actions/DebateActions');
var DebateStore   = require('../stores/DebateStore');


var getStateFromStores = function() {
  return {
    debateData: DebateStore.getDebateData(),
    pointInputState: DebateStore.getPointInputState()
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

  render: function() {
    return (
      <div>
        
        <DebateBanner />

        <div className="container">
          <PointBox
            pointInputState={this.state.pointInputState}
            debateData={this.state.debateData}
            withReason={true}
          />

          <CommentBox />
        </div>

      </div>
    );
  }
});

module.exports = DebateShowApp;
