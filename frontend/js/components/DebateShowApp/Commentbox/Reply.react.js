var React = require('react');

var Reply = React.createClass({
  render: function() {
    var reply = this.props.reply;

    return (
      <div className="reply">
        <img src={reply.avatar} />
        <div className="reply-wrapper">
          <div>
            <h6 className="name">{reply.user_name}</h6>
            <span className="date">{reply.date}</span>
          </div>
          <p className="content">{reply.content}</p>
        </div>
      </div>
    );
  }
});

module.exports = Reply;
