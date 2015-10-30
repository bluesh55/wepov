var React = require('react');

var NoReasonPoint = React.createClass({
  render: function() {
    var point = this.props.point;

    return (
      <div className="no-reason-point">
        <input type="hidden" name="points[]" value={point.title} />
        {point.title}
      </div>       
    );
  }
});

module.exports = NoReasonPoint;
