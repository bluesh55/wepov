var React = require('react');


var Debate = React.createClass({

  render: function() {
    var debate = this.props.debate;
    var debateURL = "/debates/" + debate.id;

    return (
      <div className="col-lg-4 col-md-6 mb-sm-50">
        <div className="blog-post wow fadeIn" data-wow-duration="2s">

          <a href={debateURL} className="post-img">
            <img src={debate.image.image.thumb.url} />
          </a>

          <div className="bp-content">
            <div className="post-meta">
              <a href="#" className="post-date">
                <i className="fa fa-calendar-o"></i>
                <span>date</span>
              </a>
              <a href="#" className="post-comments">
                <i className="fa fa-comments-o"></i>
                <span>0</span>
              </a>
            </div>

            <a href={debateURL} className="post-title"><h4>{debate.title}</h4></a>

            <p>{debate.content}</p>

            <a href={debateURL} className="btn btn-small">Read More</a>

          </div>

        </div>
      </div>
    );
  }
});

module.exports = Debate;
