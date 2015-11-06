var React = require('react');

var CommentCount = React.createClass({
  render: function() {
    var comments = this.props.comments;

    return (
      <div id="CommentsCount">
        <h4 className="count-title">
          Comments <span>({comments.length})</span>
        </h4>
      </div>
    );
  }
});

module.exports = CommentCount;
