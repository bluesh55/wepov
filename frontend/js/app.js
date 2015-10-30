var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var DebateNewApp = require('./components/DebateNewApp.react');
var DebateShowApp = require('./components/DebateShowApp.react');



/*
if(document.getElementById("debateForm")) {
  ReactDOM.render(<DebateForm />, document.getElementById('debateForm'));
}

if(document.getElementById("debateView")) {
  ReactDOM.render(<DebateView />, document.getElementById("debateView"));
}
*/

ReactDOM.render((
  <Router history={history}>
    <Route path="/debates/new" component={DebateNewApp} />
    <Route path="/debates/:debateId" component={DebateShowApp} />

    <Route path="*" component={null} />
  </Router>
), document.getElementById("react-app"));
