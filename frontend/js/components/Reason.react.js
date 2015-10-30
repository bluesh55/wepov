var React = require('react');

var Reason = React.createClass({
  render: function() {
    var reason = this.props.reason;
    return (
      <div className="reason">
        <h5>
          <a href="#collapse" data-toggle="collapse">
            {reason.title}
          </a>
        </h5>
        <div className="well collapse" id="collapse">
          Detail
        </div>
      </div>
    );
  }
});

module.exports = Reason;
