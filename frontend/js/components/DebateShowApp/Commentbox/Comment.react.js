var React = require('react');

var Reply = require('./Reply.react');

var Comment = React.createClass({
  render: function() {
    var comment = this.props.comment;
    var replies = comment.replies;

    return (
      <div>
        <div className="bp-comment">
          <div className="comment-info">
            <h6 className="comment-name">{comment.user_name}</h6>
            <span className="comment-time">{comment.date}</span>
            <button className="comment-replay-btn"><i className="fa fa-mail-reply-all"></i> Reply</button>
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
      </div>
    );
  }
});

module.exports = Comment;
