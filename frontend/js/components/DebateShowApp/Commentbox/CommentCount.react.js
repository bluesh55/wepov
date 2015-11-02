var React = require('react');

var CommentCount = React.createClass({
  render: function() {
    var comments = this.props.comments;

    return (
      <h4 className="blog-section-title">Comments <span>({comments.length})</span></h4>
    );
  }
});

module.exports = CommentCount;
