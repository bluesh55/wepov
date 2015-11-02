var React = require('react');

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="comment-form">
        <h4 className="blog-section-title">Leave a comment</h4>

        <form action="post">
          <div className="col-md-12 form-group no-gap">
            <textarea className="form-control" name="textarea" id="txt-forms" rows="5" placeholder="Your Comment"></textarea>
          </div>

          <input type="submit" value="Send Comment" className="btn pull-right" />
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;
