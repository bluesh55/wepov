var React = require('react');

var BreadCrumb = require('./DebateShowApp/BreadCrumb.react');
var DebateBanner = require('./DebateShowApp/DebateBanner.react');
var PointBox = require('./DebateShowApp/PointBox');
var CommentBox = require('./DebateShowApp/Commentbox');

var DebateActions = require('../actions/DebateActions');
var DebateStore   = require('../stores/DebateStore');

var _ = require('underscore');


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

  componentWillUnmount: function() {
    DebateStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var view = _.isEmpty(this.state.debateData) ? 
      <div></div> :  (
      <div>
        <BreadCrumb
          title={this.state.debateData.title}
        />

        <DebateBanner
          debateData={this.state.debateData}
        />

        <PointBox
          pointInputState={this.state.pointInputState}
          debateData={this.state.debateData}
          withReason={true}
        />

        <CommentBox
          debateData={this.state.debateData}
        />
      </div>
    );


    return view;
  }
});

module.exports = DebateShowApp;
