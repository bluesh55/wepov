var React = require('react');

var DebateActions = require('../../../actions/DebateActions');

var CommentForm = React.createClass({

  onClickSubmit: function() {
    var content = this.refs.content.value;

    if(content != "") {
      DebateActions.postComment({
        debate_id: this.props.debateData.id,
        comment_id: "",
        content: this.refs.content.value
      });

      this.refs.content.value = "";
    }
  },

  render: function() {
    var debate = this.props.debateData;

    return (
      <div id="CommentForm">
        <h4 className="title">의견 남기기</h4>

        <textarea className="form-control" rows="5" placeholder="여러분의 생각은 어떠신가요?" ref="content"></textarea>

        <button className="btn" onClick={this.onClickSubmit}>
          등록하기
        </button>
      </div>
    );
  }
});

module.exports = CommentForm;
