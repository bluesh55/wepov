var React = require('react');

var PointBox = require('./PointBox.react');

var DebateForm = React.createClass({

  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return {
      title: "",
      content: "",
      points: []
    };
  },

  addPoint: function(point) {
    var points = this.state.points;
    points.push({
      id: Date.now(),
      content: point
    });

    this.setState({
      points: points
    });
  },

  render: function() {
    return (
      <div>
        <div className="form-group">
          <input type="file" name="image" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="input-title">논쟁 제목</label>
          <input type="text" name="title" id="input-title" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="input-desc">논쟁 간단 설명</label>
          <textarea rows="5" cols="50" name="content" id="input-desc" className="form-control"></textarea>
        </div>

        <div className="form-group">
          <PointBox 
            addPoint={this.addPoint}
            points={this.state.points}
          />
        </div>

        <div className="form-group">
          <button className="btn">작성하기</button>
        </div>     
      </div>
    );
  }
});

module.exports = DebateForm;
