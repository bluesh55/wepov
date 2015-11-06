var React = require('react');

var Point = require('./Point.react');

var AddPointButton = require('./AddPointButton.react');
var PointInput = require('./PointInput.react');

var PointBox = React.createClass({
  render: function() {
    var points;
    var debate = this.props.debateData;

    if(debate.points) {
      points = debate.points.map(function(point, index) {
        return (
          <Point point={point} key={point.id} debate={debate} index={index} />
        );
      });
    }

    return (
      <div id="pointBox">
        <div className="wrapper">
          {points}

          <PointInput
            debateData={this.props.debateData}
            pointInputState={this.props.pointInputState}
          />

          <AddPointButton />
        </div>
      </div>
    );
  }
});

module.exports = PointBox;
