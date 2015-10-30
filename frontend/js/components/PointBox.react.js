var React = require('react');

var NoReasonPoint = require('./NoReasonPoint.react');
var Point = require('./Point.react');

var AddPointButton = require('./AddPointButton.react');
var PointInput = require('./PointInput.react');

var PointBox = React.createClass({
  getInitialState: function() {
    return {
      inputState: false
    };
  },

  onAddButtonClick: function(e) {
    this.setState({
      inputState: true
    });
  },

  addPoint: function(point) {
    this.props.addPoint(point);

    this.setState({
      inputState: false
    });
  },

  render: function() {
    var withReason = this.props.withReason;
    var input = this.state.inputState ? (
      <PointInput 
        addPoint={this.addPoint}
      />
    ) : null;

    var points;

    if(this.props.points) {
      if(withReason) {
        points = this.props.points.map(function(point) {
          return (
            <Point point={point} key={point.id} />
          );
        });
      } else {
        
        points = this.props.points.map(function(point) {
          return (
            <NoReasonPoint point={point} key={point.id} />
          );
        });
      }
    }

    return (
      <div id="pointBox">
        {points}

        {input}
        <AddPointButton
          onAddButtonClick={this.onAddButtonClick}
        />
      </div>
    );
  }
});

module.exports = PointBox;
