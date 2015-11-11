var React = require('react');

var CommentCount = React.createClass({
  render: function() {
    var comments = this.props.comments;

    return (
      <div id="CommentsCount">
        <h4 className="count-title">
          의견이 <span>{comments.length}</span>개 있습니다.
        </h4>
      </div>
    );
  }
});

module.exports = CommentCount;
