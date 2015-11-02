var React = require('react');

var CommentCount = require('./CommentCount.react');
var Comment = require('./Comment.react');
var CommentForm = require('./CommentForm.react');

var CommentBox = React.createClass({
  render: function() {
    var debate = this.props.debateData;
    var comments = debate.comments;

    var commentsView = comments.map(function(comment) {
      return (
        <Comment
          key={comment.id}
          debateData={debate}
          comment={comment}
        />
      );
    });

    var commentsEmptyView = (
      <div>
        작성된 댓글이 없습니다.
      </div>
    );

    return (
      <div className="row">
        <div className="col-md-12 blog-post-comments">
          <CommentCount
            comments={comments}
          />


          {
            comments.length > 0 ?
            commentsView :
            commentsEmptyView
          }

          <CommentForm
            debateData={debate}
          />
        </div>
      </div>
    );
  }
});

module.exports = CommentBox;
