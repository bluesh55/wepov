var React = require('react');

var PointBox = require('./PointBox');

var DebateShowApp = React.createClass({

  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return {
      debateData: []
    };
  },

  componentDidMount: function() {
    var self = this;
    var debateId = location.pathname.split('/').pop();

    $.get('/debates/' + debateId + '.json', function(data) {
      self.setState({
        debateData: data
      });
    });
  },

  addPoint: function(point) {
    var debateId = location.pathname.split('/').pop();

    $.post('/points', {
      "point[title]": point,
      "point[debate_id]": debateId
    }, function(data) {
      // 논점 추가 완료
      // data.status == 'ok'
    });
  },

  render: function() {
    return (
      <div>
        <header className="page-title pt-light pt-plax-md-light"  style={{backgroundImage: debateImageURL}}>
          <div className="bg-overlay">
            <div className="container">
              <div className="row">

                <div className="col-sm-12 title">
                  <h1>{debateTitle}</h1>
                </div>
                <div className="col-sm-6 info">
                  <p>{debateContent}</p>
                </div>

                <div className="col-sm-6">
                  <div className="progress-box">
                    <div className="progress">
                      <div className="progress-bar" style={{width: '60%'}}></div>
                    </div>
                    <div className="progress-title pros">
                      찬성 60%
                    </div>
                    <div className="progress-title cons">
                      반대 40%
                    </div>
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </header>


        <div className="container">
          <PointBox
            addPoint={this.addPoint}
            points={this.state.debateData.points}
            withReason={true}
          />

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
        </div>
      </div>
    );
  }
});

module.exports = DebateShowApp;
