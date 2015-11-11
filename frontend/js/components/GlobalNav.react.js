var React = require('react');
var Link  = require('react-router').Link;

var GlobalNav = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top mega navbar-inverse navbar-trans" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src="#" />
            </a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="mega-fw">
                <Link to="/debates/new" />
              </li>

              <li className="mega-fw">
                MyPage
              </li>
              <li className="mega-fw">
                  Logout
              </li>
              <li className="mega-fw">
                  Login
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = GlobalNav;
