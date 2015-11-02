var React = require('react');

var DebateActions = require('../../../actions/DebateActions');

var CommentForm = React.createClass({

  onClickSubmit: function() {
    DebateActions.postComment({
      debate_id: this.props.debateData.id,
      comment_id: "",
      content: this.refs.content.value
    });
  },

  render: function() {
    var debate = this.props.debateData;

    return (
      <div className="comment-form">
        <h4 className="blog-section-title">Leave a comment</h4>

        <div className="col-md-12 form-group no-gap">
          <textarea className="form-control" id="txt-forms" rows="5" placeholder="Your Comment" ref="content"></textarea>
        </div>

        <input type="submit" value="Send Comment" className="btn pull-right" onClick={this.onClickSubmit} />
      </div>
    );
  }
});

module.exports = CommentForm;
