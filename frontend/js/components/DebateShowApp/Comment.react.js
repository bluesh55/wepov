var React = require('react');

var Reply = require('./Reply.react');

var Comment = React.createClass({
  render: function() {
    return (
      <div>
        <div className="bp-comment">
          <div className="comment-info">
            <h6 className="comment-name">Stella Hartmann</h6>
            <span className="comment-time">on June 23,2015, at 22:34</span>
            <button className="comment-replay-btn"><i className="fa fa-mail-reply-all"></i> Reply</button>
          </div>
          <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>

        <Reply />
      </div>
    );
  }
});

module.exports = Comment;
