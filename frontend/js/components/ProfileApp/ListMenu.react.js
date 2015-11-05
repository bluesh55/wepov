var React = require('react');


var ListMenu = React.createClass({
  render: function() {
    return (
      <div id="ListMenu">
        <ul className="list">
          <li className="item">
            <div className="image-wrapper">
              <img src="#" />
            </div>

            <div className="title">
              전체보기
            </div>
          </li>
          <li className="item">
            <div className="image-wrapper">
              <img src="#" />
            </div>

            <div className="title">
              전체보기
            </div>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = ListMenu;
