var React = require('react');

var RegisterApp = React.createClass({
  render: function() {
    return (
      <form action="/users" method="post" encType="multipart/form-data">
        <input type="hidden" name="authenticity_token" value={this.props.token} />

        <div className="form-group">
          <label htmlFor="Avatar">Avatar</label>
          <input type="file" name="user[avatar]" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="RegisterEmail">Email</label>
          <input type="email" className="form-control"
            id="RegisterEmail" placeholder="Enter your email"
            name="user[email]" />
        </div>

        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input type="text" className="form-control"
            id="Name" placeholder="What is your name?"
            name="user[name]" />
        </div>

        <div className="form-group">
          <label htmlFor="RegisterPassword">Password</label>
          <input type="password" className="form-control"
            id="RegisterPassword" placeholder="Enter your password"
            name="user[password]" />
        </div>

        <div className="form-group">
          <label htmlFor="RePassword">Re-enter Password</label>
          <input type="password" className="form-control"
            id="RePassword" placeholder="Re-enter your password"
            name="user[password_confirmation]" />
        </div>

        <div className="form-group">
          <label htmlFor="Intro">Introduction</label>
          <textarea className="form-control"
            id="Intro" placeholder="Introduce Yourself"
            name="user[intro]" rows="9" />
        </div>

        <input type="submit" name="commit" value="Register" className="btn btn-primary" />
      </form>
    );
  }
});

module.exports = RegisterApp;
