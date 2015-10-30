var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var DebateForm = require('./components/DebateForm.react');
var DebateView = require('./components/DebateView.react');



/* /debates/new */
if(document.getElementById("debateForm")) {
  ReactDOM.render(<DebateForm />, document.getElementById('debateForm'));
}

if(document.getElementById("debateView")) {
  ReactDOM.render(<DebateView />, document.getElementById("debateView"));
}
