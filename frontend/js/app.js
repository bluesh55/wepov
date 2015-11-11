var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var GlobalNav     = require('./components/GlobalNav.react');
var DebateMainApp = require('./components/DebateMainApp.react');
var DebateNewApp = require('./components/DebateNewApp.react');
var DebateShowApp = require('./components/DebateShowApp.react');
var ProfileApp    = require('./components/ProfileApp');

var RootApp = React.createClass({
  render: function() {
    return (
      <div id="root">
        <GlobalNav />
        {this.props.children || <DebateMainApp />}
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={RootApp}>
      <Route path="/debates/new" component={DebateNewApp} />
      <Route path="/debates/:debateId" component={DebateShowApp} />
      <Route path="/profile/:userId" component={ProfileApp} />
    </Route>
    <Route path="*" component={null} />
  </Router>
), document.getElementById("react-app"));
