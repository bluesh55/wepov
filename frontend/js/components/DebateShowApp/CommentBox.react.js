var React = require('react');

var Comment = require('./Comment.react');
var CommentForm = require('./CommentForm.react');

var CommentBox = React.createClass({
  render: function() {
    var debate = this.props.debateData;
    var comments = debate.comments;

    return (
      <div className="row">
        <div className="col-md-12 blog-post-comments">
          <h4 className="blog-section-title">Comments <span>(4)</span></h4>
          {comments.map(function(comment) {
            return (
              <Comment
                comment={comment}
              />
            );
          })}

          <CommentForm />
        </div>
      </div>
    );
  }
});

module.exports = CommentBox;
