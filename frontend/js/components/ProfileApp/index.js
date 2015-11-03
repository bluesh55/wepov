var React = require('react');

var DebateActions = require('../../actions/DebateActions');
var DebateStore   = require('../../stores/DebateStore');

var ProfileBox = require('./ProfileBox.react');
var ListMenu   = require('./ListMenu.react');
var MainBoard  = require('./MainBoard.react');


var minHeight = window.innerHeight - 75;

var getStateFromStores = function() {
  return {
    minHeight: minHeight
  };
};

var DebateMainApp = React.createClass({
  _onChange: function() {
    this.setState(getStateFromStores());
  },

  onResize: function() {
    if(window.innerHeight > minHeight) {
      this.setState({
        minHeight: window.innerHeight - 75
      });
    } else if(this.state.minHeight != minHeight) {
      this.setState({
        minHeight: minHeight
      });
    }
  },
  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    DebateStore.addChangeListener(this._onChange);

    window.onresize = this.onResize;
  },

  componentWillUnmount: function() {
    DebateStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div id="ProfileApp">
        <div id="Menu">
          <ProfileBox />
          <ListMenu />
        </div>
        <div id="Dashboard">
          <MainBoard
            minHeight={this.state.minHeight}
          />
        </div>
      </div>
    );
  }
});

module.exports = DebateMainApp;
