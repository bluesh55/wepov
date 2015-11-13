var React = require('react');

var LoginApp = React.createClass({
  render: function() {
    return (
      <form action="/users/sign_in" method="post">
        <input type="hidden" name="authenticity_token" value={this.props.token} />

        <div className="form-group">
          <label htmlFor="LoginEmail">Email</label>
          <input type="email" className="form-control"
            id="LoginEmail" placeholder="Enter your email"
            name="user[email]" />
        </div>

        <div className="form-group">
          <label htmlFor="LoginPassword">Password</label>
          <input type="password" className="form-control"
            id="LoginPassword" placeholder="Enter your password"
            name="user[password]" />
        </div>

        <input type="submit" name="commit" value="Login" className="btn btn-primary" />
      </form>

    );
  }
});

module.exports = LoginApp;
