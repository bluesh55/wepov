var React = require('react');

var Point = require('./Point.react');

var DebateActions = require('../../../actions/DebateActions');

var PointBox = React.createClass({
  render: function() {
    var debate = this.props.debateData;

    var pointsView = debate.points.map(function(point, index) {
      return (
        <Point point={point} key={point.id} debate={debate} index={index} />
      );
    });

    if(pointsView.length == 0) {
      pointsView = <PointBox.EmptyPoints />
    }

    return (
      <div id="pointBox">
        <div className="wrapper">
          {pointsView}

          <PointBox.PointForm
            debate={debate}
          />
        </div>
      </div>
    );
  }
});

PointBox.EmptyPoints = React.createClass({
  render: function() {
    return (
      <div id="EmptyPoints">
        등록된 논점이 없습니다.
      </div>
    );
  }
});

PointBox.PointForm = React.createClass({
  onClickPostPoint: function() {
    var value = this.refs.pointInput.value;

    if(value != "" && value.length > 5) {
      DebateActions.postPoint({
        debate_id: this.props.debate.id,
        title: value
      });

      this.refs.pointInput.value = "";
    }
  },
  render: function() {
    return (
      <div id="PointForm">
        <div className="point-input-wrapper">
          <input type="text" className="form-control" placeholder="논점은 5자 이상 작성해주세요." ref="pointInput" />
        </div>
        <button className="btn btn-success" onClick={this.onClickPostPoint}>논점 추가하기</button>
      </div>
    );
  }
});
module.exports = PointBox;
