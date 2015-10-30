var React = require('react');

var NoReasonPoint = require('./NoReasonPoint.react');
var Point = require('./Point.react');

var AddPointButton = require('./AddPointButton.react');
var PointInput = require('./PointInput.react');

var PointBox = React.createClass({
  render: function() {
    var withReason = this.props.withReason;
    var points;

    if(this.props.debateData.points) {
      if(withReason) {
        points = this.props.debateData.points.map(function(point) {
          return (
            <Point point={point} key={point.id} />
          );
        });
      } else {
        
        points = this.props.debateData.points.map(function(point) {
          return (
            <NoReasonPoint point={point} key={point.id} />
          );
        });
      }
    }

    return (
      <div id="pointBox">
        {points}

        <PointInput
          debateData={this.props.debateData}
          pointInputState={this.props.pointInputState}
        />

        <AddPointButton />
      </div>
    );
  }
});

module.exports = PointBox;
