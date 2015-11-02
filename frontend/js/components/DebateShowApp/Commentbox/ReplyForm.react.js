var React = require('react');

var DebateActions = require('../../../actions/DebateActions');

var ReplyForm = React.createClass({

  onClickSubmit: function() {
    var content = this.refs.content.value;

    if(content != "") {
      DebateActions.postComment({
        debate_id: this.props.debate_id,
        comment_id: this.props.comment_id,
        content: this.refs.content.value
      });

      this.refs.content.value = "";
    }
  },

  render: function() {
    return (
      <div className="reply-form">
        <h4 className="blog-section-title">Leave a reply</h4>

        <div className="col-md-12 form-group no-gap">
          <textarea className="form-control" id="txt-forms" rows="5" placeholder="Your Comment" ref="content"></textarea>
        </div>

        <input type="submit" value="Send Comment" className="btn pull-right" onClick={this.onClickSubmit} />
      </div>
    );
  }
});

module.exports = ReplyForm;
