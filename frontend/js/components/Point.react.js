var React = require('react');

var Point = React.createClass({
  render: function() {
    return (
      <div className="point">
        <h4>{this.props.point.content}</h4>
        <span>
          <i className="fa fa-times" />
        </span>
      </div>
    );
  }
});

module.exports = Point;
