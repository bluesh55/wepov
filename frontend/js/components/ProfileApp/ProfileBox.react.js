var React = require('react');


var ProfileBox = React.createClass({
  render: function() {
    var name = this.props.profileData.name;
    var email = this.props.profileData.email;
    var intro = this.props.profileData.intro;
    var avatar = this.props.profileData.avatar;

    return (
      <div id="ProfileBox">
        <div className="profile-container">
          <div className="image-wrapper">
            <img src={avatar} />
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
