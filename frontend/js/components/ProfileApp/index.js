var React = require('react');

var DebateActions = require('../../actions/DebateActions');
var ProfileStore   = require('../../stores/ProfileStore');

var ProfileBox = require('./ProfileBox.react');
var ListMenu   = require('./ListMenu.react');
var MainBoard  = require('./MainBoard.react');


var getStateFromStores = function() {
  return {
    profileData: ProfileStore.getProfileData()
  };
};

var ProfileApp = React.createClass({
  _onChange: function() {
    this.setState(getStateFromStores());
  },

  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    ProfileStore.addChangeListener(this._onChange);

    DebateActions.fetchProfileData(this.props.params.userId);
  },

  componentWillUnmount: function() {
    ProfileStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var board = Object.keys(this.state.profileData).length > 0 ?
      (
        <MainBoard
          profileData={this.state.profileData}
        />
      ) : 
      null;
    return (
      <div id="ProfileApp">
        <div id="Menu">
          <ProfileBox
            profileData={this.state.profileData}
          />
          <ListMenu />
        </div>
        <div id="Dashboard">
          {board}
        </div>
      </div>
    );
  }
});

module.exports = ProfileApp;
