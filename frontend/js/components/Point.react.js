var React = require('react');

var Point = React.createClass({
  render: function() {
    return (
      <div className="point">
        <input type="hidden" name="points[]" value={this.props.point.content} />
        <h3>{this.props.point.content}</h3>
        <span className="remove">
          <i className="fa fa-times" />
        </span>
      </div>
    );
  }
});

module.exports = Point;
