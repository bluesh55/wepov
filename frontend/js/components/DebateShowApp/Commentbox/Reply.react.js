var React = require('react');

var Reply = React.createClass({
  render: function() {
    var reply = this.props.reply;

    return (
      <div className="bp-comment-reply">
        <div className="comment-info">
          <h6 className="comment-name">{reply.user_name}</h6>
          <span className="comment-time">{reply.date}</span>
        </div>
        <p className="comment-content">{reply.content}</p>
      </div>
    );
  }
});

module.exports = Reply;
