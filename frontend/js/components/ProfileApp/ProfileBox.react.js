var React = require('react');


var ProfileBox = React.createClass({
  render: function() {
    var name = this.props.userData.name;
    var email = this.props.userData.email;
    var intro = this.props.userData.intro;

    return (
      <div id="ProfileBox">
        <div className="profile-container">
          <div className="image-wrapper">
            <img src="#" />
          </div>

          <div className="name">
            <span>{name}</span>
          </div>

          <div className="email">
            <span>{email}</span>
          </div>

          <p clsasName="intro">
            {intro}
          </p>
        </div>
      </div>
    );
  }
});

module.exports = ProfileBox;
