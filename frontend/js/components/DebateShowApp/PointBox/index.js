var React = require('react');

var Point = require('./Point.react');

var DebateActions = require('../../../actions/DebateActions');

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

          <PointBox.PointForm
            debate={debate}
          />
        </div>
      </div>
    );
  }
});

PointBox.PointForm = React.createClass({
  onClickPostPoint: function() {
    var value = this.refs.pointInput.value;
    this.refs.pointInput.value = "";

    DebateActions.postPoint({
      debate_id: this.props.debate.id,
      title: value
    });

  },
  render: function() {
    return (
      <div id="PointForm">
        <textarea className="form-control" rows="5" placeholder="새로운 논점을 추가해보세요." ref="pointInput"></textarea>
        <button className="btn" onClick={this.onClickPostPoint}>논점 추가하기</button>
      </div>
    );
  }
});
module.exports = PointBox;
