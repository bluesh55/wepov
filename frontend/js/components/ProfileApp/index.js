var React = require('react');

var DebateActions = require('../../actions/DebateActions');
var DebateStore   = require('../../stores/DebateStore');

var ProfileBox = require('./ProfileBox.react');
var Menu       = require('./Menu.react');
var MainBoard  = require('./MainBoard.react');



var getStateFromStores = function() {
  return {
  };
};

var DebateMainApp = React.createClass({
  _onChange: function() {
    this.setState(getStateFromStores());
  },

  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    DebateStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DebateStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div id="ProfileApp">
        <div id="Menu">
          <ProfileBox />
          <Menu />
        </div>
        <div id="Dashboard">
          <MainBoard />
        </div>
      </div>
    );
  }
});

module.exports = DebateMainApp;
