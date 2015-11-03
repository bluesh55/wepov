var React = require('react');


var ProfileBox = React.createClass({
  render: function() {
    return (
      <div id="ProfileBox">
        <div className="profile-container">
          <div className="image-wrapper">
            <img src="#" />
          </div>

          <div className="name">
            <span>KHRIS</span>
          </div>

          <div className="email">
            <span>kaka00007@naver.com</span>
          </div>

          <p clsasName="intro">
            ASDFASDF 님의 프로필ASDFASDF 님의 프로필.
          </p>
        </div>
      </div>
    );
  }
});

module.exports = ProfileBox;
