var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var DebateMainApp = require('./components/DebateMainApp.react');
var DebateNewApp = require('./components/DebateNewApp.react');
var DebateShowApp = require('./components/DebateShowApp.react');
var ProfileApp    = require('./components/ProfileApp');


ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={DebateMainApp} />
    <Route path="/debates/new" component={DebateNewApp} />
    <Route path="/debates/:debateId" component={DebateShowApp} />
    <Route path="/users/:userId" component={ProfileApp} />

    <Route path="*" component={null} />
  </Router>
), document.getElementById("react-app"));
