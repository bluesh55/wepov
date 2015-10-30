var React = require('react');

var PointBox = require('./PointBox.react');

var DebateView = React.createClass({

  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return {
      points: []
    };
  },

  componentDidMount: function() {
    var self = this;
    $.get('/points.json', function(data) {
      self.setState({
        points: data
      });
    });
  },

  addPoint: function(point) {

  },

  render: function() {
    return (
      <PointBox
        addPoint={this.addPoint}
        points={this.state.points}
        withReason={true}
      />
    );
  }
});

module.exports = DebateView;
