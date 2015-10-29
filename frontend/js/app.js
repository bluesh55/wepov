var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var PointBox = require('./components/PointBox.react');



/* /debates/new */
if(document.getElementById("pointBox")) {
  ReactDOM.render((
    <Router history={history}>
      <Route path="/debates/new" component={PointBox} />
    </Router>
  ), document.getElementById('pointBox'));
}
