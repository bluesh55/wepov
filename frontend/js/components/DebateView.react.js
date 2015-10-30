var React = require('react');

var PointBox = require('./PointBox.react');

var DebateView = React.createClass({

  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return {
      debateData: []
    };
  },

  componentDidMount: function() {
    var self = this;
    $.get('/debates/1.json', function(data) {
      self.setState({
        debateData: data
      });
    });
  },

  addPoint: function(point) {

  },

  render: function() {
    return (
      <PointBox
        addPoint={this.addPoint}
        points={this.state.debateData.points}
        withReason={true}
      />
    );
  }
});

module.exports = DebateView;
