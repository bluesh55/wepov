var React = require('react');

var Point = require('./Point.react');
var AddPointButton = require('./AddPointButton.react');
var PointInput = require('./PointInput.react');

var PointBox = React.createClass({
  getInitialState: function() {
    return {
      points: [],
      inputState: false
    };
  },

  onAddButtonClick: function(e) {
    this.setState({
      inputState: true
    });
  },

  addPoint: function(point) {
    var points = this.state.points;
    points.push({
      id: Date.now(),
      content: point
    });

    this.setState({
      points: points,
      inputState: false
    });
  },

  render: function() {
    var input = this.state.inputState ? (
      <PointInput 
        addPoint={this.addPoint}
      />
    ) : null;

    return (
      <div>
        {this.state.points.map(function(point) {
          return (
            <Point point={point} key={point.id} />
          );
        })}

        {input}
        <AddPointButton
          onAddButtonClick={this.onAddButtonClick}
        />
      </div>
    );
  }
});

module.exports = PointBox;
