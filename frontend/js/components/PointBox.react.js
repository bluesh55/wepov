var React = require('react');

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
    var input = this.state.inputState ? (
      <PointInput 
        addPoint={this.addPoint}
      />
    ) : null;

    return (
      <div id="pointBox">
        {this.props.points.map(function(point) {
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
