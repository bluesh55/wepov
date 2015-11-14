var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var GlobalNav     = require('./components/GlobalNav.react');
var DebateMainApp = require('./components/DebateMainApp');
var DebateNewApp = require('./components/DebateNewApp');
var DebateShowApp = require('./components/DebateShowApp');
var ProfileApp    = require('./components/ProfileApp');
var SignApp      = require('./components/SignApp');


var GlobalActions = require('./actions/GlobalActions');
var GlobalStore   = require('./stores/GlobalStore');

function getStatesFromStore() {
  return {
    globalData: GlobalStore.getGlobalData()
  };
}

var RootApp = React.createClass({
  getInitialState: getStatesFromStore,
  onChange: function() {
    this.setState(getStatesFromStore());
  }, componentDidMount: function() {
    GlobalStore.addChangeListener(this.onChange);
    GlobalActions.fetchGlobalData();
  },

  render: function() {
    var is_fetched = Object.keys(this.state.globalData).length > 0;

    var view = <div id="root"/>;

    if(is_fetched) {
      view = (
        <div id="root">
          <GlobalNav
            globalData={this.state.globalData}
          />
          {this.props.children || <DebateMainApp />}
        </div>
      );
    }

    return view;
  }
});

ReactDOM.render((
  <Router history={history} onUpdate={function() {window.scrollTo(0, 0)}}>
    <Route path="/" component={RootApp}>
      <Route path="/debates/new" component={DebateNewApp} />
      <Route path="/debates/:debateId" component={DebateShowApp} />
      <Route path="/profile/:userId" component={ProfileApp} />
      <Route path="/users">
        <Route path="/users/sign_in" component={SignApp} type="login" />
        <Route path="/users/sign_up" component={SignApp} type="register" />
      </Route>
    </Route>
    <Route path="*" component={null} />
  </Router>
), document.getElementById("react-app"));
