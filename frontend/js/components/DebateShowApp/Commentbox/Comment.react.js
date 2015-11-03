var React = require('react');

var Reply = require('./Reply.react');
var ReplyForm = require('./ReplyForm.react');

var Comment = React.createClass({
  getInitialState: function() {
    return {
      replyForm: false
    };
  },

  onClickReplyForm: function() {
    this.setState({
      replyForm: true
    });
  },

  render: function() {
    var debate = this.props.debateData;
    var comment = this.props.comment;
    var replies = comment.replies;

    return (
      <div>
        <div className="comment">
          <div className="comment-info">
            <h6 className="comment-name">{comment.user_name}</h6>
            <span className="comment-time">{comment.date}</span>
            <button className="comment-replay-btn" onClick={this.onClickReplyForm}><i className="fa fa-mail-reply-all"></i> Reply</button>
          </div>
          <p className="comment-content">{comment.content}</p>
        </div>

        {replies.map(function(reply) {
          return (
            <Reply
              reply={reply}
              key={reply.id}
            />
          );
        })}

        {this.state.replyForm ? 
        <ReplyForm
          debate_id={debate.id}
          comment_id={comment.id}
        /> :
        ""
        }
      </div>
    );
  }
});

module.exports = Comment;
