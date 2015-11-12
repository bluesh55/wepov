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

    return (
      <div id="Comments">
        <div className="comments-wrapper">
          <CommentCount
            comments={comments}
          />

          {
            comments.length > 0 ?
            commentsView :
            <CommentBox.EmptyView />
          }

          <CommentForm
            debateData={debate}
          />
        </div>
      </div>
    );
  }
});

CommentBox.EmptyView = React.createClass({
  render: function() {
    return (
      <div id="EmptyComments">
        작성된 의견이 없습니다.
      </div>
    );
  }
});

module.exports = CommentBox;
