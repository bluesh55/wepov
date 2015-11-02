var React = require('react');

var CommentCount = require('./Commentcount.react');
var Comment = require('./Comment.react');
var CommentForm = require('./CommentForm.react');

var CommentBox = React.createClass({
  render: function() {
    var debate = this.props.debateData;
    var comments = debate.comments;

    return (
      <div className="row">
        <div className="col-md-12 blog-post-comments">
          <CommentCount
            comments={comments}
          />

          {comments.map(function(comment) {
            return (
              <Comment
                comment={comment}
              />
            );
          })}

          <CommentForm
            debateData={debate}
          />
        </div>
      </div>
    );
  }
});

module.exports = CommentBox;
