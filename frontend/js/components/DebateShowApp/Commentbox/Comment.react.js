var React = require('react');

var Reply = require('./Reply.react');
var ReplyForm = require('./ReplyForm.react');

var Comment = React.createClass({
  getInitialState: function() {
    return {
      replyShow: false
    };
  },

  onClickShowReply: function() {
    this.setState({
      replyShow: true
    });
  },

  render: function() {
    var debate = this.props.debateData;
    var comment = this.props.comment;
    var replies = comment.replies;

    return (
      <div className="comment">
        <div className="wrapper">
          <div className="info">
            <img src={comment.avatar} className="avatar" />
            <p className="name">{comment.user_name}</p>
            <p className="date">{comment.date}</p>
          </div>

          <div className="balloon">
            <div className="wrapper">
              <p className="content">
              {comment.content}
              </p>

              <div className="buttons">
                <button className="show-reply" onClick={this.onClickShowReply}>
                  <span>답글</span>
                  <span>{replies.length}</span>
                  <i className="fa fa-angle-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {
          this.state.replyShow ?
          <Comment.ReplyBox
            debate={debate}
            comment={comment}
            replies={replies}
          /> :
          ""
        }
      </div>
    );
  }
});

Comment.ReplyBox = React.createClass({
  render: function() {
    var debate = this.props.debate;
    var comment = this.props.comment;
    var replies = this.props.replies;

    return (
      <div className="reply-box">
        <div className="wrapper">
          {replies.map(function(reply) {
            return (
              <Reply
                reply={reply}
                key={reply.id}
              />
            );
          })}

          <ReplyForm
            debate_id={debate.id}
            comment_id={comment.id}
          />
        </div>
      </div>
    );
  }
});

module.exports = Comment;
