var React = require('react');

var Comment = require('./Comment.react');
var CommentForm = require('./CommentForm.react');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12 blog-post-comments">
          <h4 className="blog-section-title">Comments <span>(4)</span></h4>
          <Comment />

          <CommentForm />
        </div>
      </div>
    );
  }
});

module.exports = CommentBox;
