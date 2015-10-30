var React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12 blog-post-comments">
          <h4 className="blog-section-title">Comments <span>(4)</span></h4>

          <div className="bp-comment">
            <div className="comment-info">
              <h6 className="comment-name">Stella Hartmann</h6>
              <span className="comment-time">on June 23,2015, at 22:34</span>
              <button className="comment-replay-btn"><i className="fa fa-mail-reply-all"></i> Reply</button>
            </div>
            <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div className="bp-comment-reply">
            <div className="comment-info">
              <h6 className="comment-name">Stella Hartmann</h6>
              <span className="comment-time">on June 23,2015, at 22:34</span>
              <button className="comment-replay-btn"><i className="fa fa-mail-reply-all"></i> Reply</button>
            </div>
            <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          

          <div className="comment-form">
            <h4 className="blog-section-title">Leave a comment</h4>

            <form action="post">
              <div className="col-md-12 form-group no-gap">
                <textarea className="form-control" name="textarea" id="txt-forms" rows="5" placeholder="Your Comment"></textarea>
              </div>

              <input type="submit" value="Send Comment" className="btn pull-right" />
            </form>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = CommentBox;
