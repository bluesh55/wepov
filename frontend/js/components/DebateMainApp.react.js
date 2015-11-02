var React = require('react');

var DebateActions = require('../actions/DebateActions');
var DebateStore   = require('../stores/DebateStore');


var Banner = require('./DebateMainApp/Banner.react');
var Debates = require('./DebateMainApp/Debates.react');

var getStateFromStores = function() {
  return {
    debatesData: DebateStore.getDebatesData()
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
    
    DebateActions.readDebates();
  },

  componentWillUnmount: function() {
    DebateStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div id="app">
        <Banner />

        <Debates
          debatesData={this.state.debatesData}
        />
      </div>
    );
  }
});

module.exports = DebateMainApp;
