var React = require('react');

var DebateActions = require('../../../actions/DebateActions');

var ReplyForm = React.createClass({

  onClickSubmit: function() {
    var content = this.refs.content.value;

    if(content != "") {
      DebateActions.postComment({
        debate_id: this.props.debate_id,
        comment_id: this.props.comment_id,
        content: this.refs.content.value
      });

      this.refs.content.value = "";
    }
  },

  render: function() {
    return (
      <div className="reply-form">
        <div className="form">
          <textarea className="form-control" id="txt-forms" rows="5" placeholder="답글을 남겨주세요." ref="content"></textarea>

          <button className="btn btn-success pull-right" onClick={this.onClickSubmit}>댓글 쓰기</button>
        </div>
      </div>
    );
  }
});

module.exports = ReplyForm;
