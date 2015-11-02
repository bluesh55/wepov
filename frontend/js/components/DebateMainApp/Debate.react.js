var React = require('react');

var Link = require('react-router').Link;


var Debate = React.createClass({

  render: function() {
    var debate = this.props.debate;
    var debateURL = "/debates/" + debate.id;

    return (
      <div className="col-lg-4 col-md-6 mb-sm-50">
        <div className="blog-post wow fadeIn" data-wow-duration="2s">

          <Link to={debateURL} className="post-img">
            <img src={debate.image.image.thumb.url} />
          </Link>

          <div className="bp-content">
            <div className="post-meta">
              <a href="#" className="post-date">
                <i className="fa fa-calendar-o"></i>
                <span>{debate.created_at}</span>
              </a>
              <a href="#" className="post-comments">
                <i className="fa fa-comments-o"></i>
                <span>{debate.comments_count}</span>
              </a>
            </div>

            <Link to={debateURL} className="post-title">
              <h4>{debate.title}</h4>
            </Link>

            <p>{debate.content}</p>

            <Link to={debateURL} className="btn btn-small">Read More</Link>

          </div>

        </div>
      </div>
    );
  }
});

module.exports = Debate;
