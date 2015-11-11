var React = require('react');

var Link = require('react-router').Link;


var Debate = React.createClass({

  render: function() {
    var debate = this.props.debate;
    var debateURL = "/debates/" + debate.id;

    return (
      <div className="col-lg-4 col-md-6 debate-wrapper">
        <div className="debate">
          <Link to={debateURL}>
            <img src={debate.image.image.thumb.url} />
          </Link>

          <div className="info-wrapper">
            <div className="debate-meta">
              <a href={debateURL} className="date">
                <i className="fa fa-calendar-o"></i>
                <span>{debate.created_at}</span>
              </a>
              <a href={debateURL} className="comments">
                <i className="fa fa-comments-o"></i>
                <span>{debate.comments_count}</span>
              </a>
            </div>

            <Link to={debateURL} className="debate-title">
              {debate.title}
            </Link>

            <p className="debate-desc">{debate.content}</p>

            <Link to={debateURL} className="btn btn-primary">Read More</Link>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Debate;
