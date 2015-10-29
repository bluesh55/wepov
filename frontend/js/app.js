var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var DebateForm = require('./components/DebateForm.react');



/* /debates/new */
if(document.getElementById("debateForm")) {
  ReactDOM.render((
    <Router history={history}>
      <Route path="/debates/new" component={DebateForm} />
    </Router>
  ), document.getElementById('debateForm'));
}
