var React = require('react');

var Point = require('./Point.react');

var AddPointButton = require('./AddPointButton.react');
var PointInput = require('./PointInput.react');

var PointBox = React.createClass({
  render: function() {
    var points;

    if(this.props.debateData.points) {
      points = this.props.debateData.points.map(function(point) {
        return (
          <Point point={point} key={point.id} />
        );
      });
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
