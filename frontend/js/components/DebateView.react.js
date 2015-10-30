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
    var debateId = location.pathname.split('/').pop();

    $.get('/debates/' + debateId + '.json', function(data) {
      self.setState({
        debateData: data
      });
    });
  },

  addPoint: function(point) {
    var debateId = location.pathname.split('/').pop();

    $.post('/points', {
      "point[title]": point,
      "point[debate_id]": debateId
    }, function(data) {
      // 논점 추가 완료
      // data.status == 'ok'
    });
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
