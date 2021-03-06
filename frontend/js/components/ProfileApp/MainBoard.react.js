var React = require('react');
var Link = require('react-router').Link;

var $ = require('jquery');
var slick = require('slick-carousel');

var classnames = require('classnames');


var MainBoard = React.createClass({
  render: function() {
    return (
      <div className="main dashboard">
        <MainBoard.VotedDebatesBox
          profileData={this.props.profileData}
        />
        <MainBoard.MyDebatesBox
          profileData={this.props.profileData}
        />
      </div>
    );
  }
});


/* VotedDebatesBox */
MainBoard.VotedDebatesBox = React.createClass({
  componentDidMount: function() {
    $('#VotedDebatesSlider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
  },
  render: function() {
    var profileData = this.props.profileData;
    var votedDebates = this.props.profileData.votedDebates;

    return (
      <div id="VotedDebatesBox">
        <div className="wrapper">
          <div className="title">
            투표한 논쟁
          </div>

          <div id="VotedDebatesSlider">
            {votedDebates.map(function(debate) {
              return (
                <div key={debate.id}>
                  <MainBoard.VotedDebatesSliderItem
                    debate={debate}
                    profileData={profileData}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
});

/* VotedDebatesBox => VotedDebatesSliderItem */
MainBoard.VotedDebatesSliderItem = React.createClass({
  render: function() {
    var profileData = this.props.profileData;
    var debate = this.props.debate;

    var total = debate.pros_count + debate.cons_count;
    var prosPercentage = Math.round(debate.pros_count / (total / 100));
    var consPercentage = Math.round(debate.cons_count / (total / 100));
    return (
      <div className="item-wrapper">
        <div className="item">
          <Link to={'/debates/' + debate.id}>
            <img src={debate.image} />
          </Link>
          <div className="info">
            <div className="title">
            <Link to={'/debates/' + debate.id}>{debate.title}</Link>
            </div>

            <div className="count-wrapper">
              <span className="comments-count">
                <i className="fa fa-comment-o"></i>
                <span className="prefix">댓글</span>
                <span className="number">{debate.comments_count}</span>
              </span>
              <span className="points-count">
                <i className="fa fa-book"></i>
                <span className="prefix">논점</span>
                <span className="number">{debate.points_count}</span>
              </span>
            </div>

            <div className="proscons-wrapper">
              <span className="pros-count">
                <span className="prefix">찬성</span>
                <span className="percentage">{prosPercentage + "%"}</span>
                <span className="number">{debate.pros_count}</span>
              </span>

              <span className="cons-count">
                <span className="number">{debate.cons_count}</span>
                <span className="percentage">{consPercentage + "%"}</span>
                <span className="suffix">반대</span>
              </span>
            </div>

            <MainBoard.HorizontalStickGraph
              leftCount={debate.pros_count}
              rightCount={debate.cons_count}
              isLeftImage={debate.isPros}
              imageURL={profileData.avatar}
            />
          </div>
        </div>
      </div>
    );
  }
});

MainBoard.HorizontalStickGraph = React.createClass({
  render: function() {
    var leftCount = this.props.leftCount;
    var rightCount = this.props.rightCount;
    var total = leftCount + rightCount;
    var leftPercentage = Math.round(leftCount / (total / 100));
    var rightPercentage = Math.round(rightCount / (total / 100));

    var isFullLeftBar = leftPercentage == 100;

    var barClass = classnames({
      'bar': true,
      'full': isFullLeftBar
    });

    var imageClass = classnames({
      'left': this.props.isLeftImage,
      'right': !this.props.isLeftImage
    });

    return (
      <div className="horizontalStickGraph">
        <div className="graph">
          <div className={barClass} style={{width: leftPercentage + '%'}}>
          </div>

          <div className="overlay">
            <img src={this.props.imageURL} className={imageClass} />
          </div>
        </div>
      </div>
    );
  }
});



/* MyDebatesBox */
MainBoard.MyDebatesBox = React.createClass({
  componentDidMount: function() {
  },
  render: function() {
    var myDebates = this.props.profileData.debates;

    return (
      <div id="MyDebatesBox">
        <div className="wrapper">
          <div className="title">
            만든 논쟁들
          </div>

          <div id="MyDebates">
            {myDebates.map(function(debate) {
              return (
                <MainBoard.MyDebate
                  key={debate.id}
                  debate={debate}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
});

/* MyPoints And Reasons */
MainBoard.MyDebate = React.createClass({
  render: function() {
    var debate = this.props.debate;
    var isMine = debate.isMine;

    var typeClass = classnames({
      type: true,
      debate: isMine
    });
    return (
      <div className="my-debate debate-label">
        <div className="wrapper">
          <div className="title">
            <span className={typeClass}>논쟁</span>
            {debate.title}
          </div>

          {debate.points.map(function(point) {
            return (
              <MainBoard.MyPoint
                key={point.id}
                point={point}
              />
            );
          })}
        </div>
      </div>
    );
  }
});

/* MyPoints And Reasons */
MainBoard.MyPoint = React.createClass({
  render: function() {
    var point = this.props.point;
    var isMine = point.isMine;
    var typeClass = classnames({
      type: true,
      point: isMine
    });
    return (
      <div className="my-point debate-label">
        <div className="wrapper">
          <div className="title">
            <span className={typeClass}>논점</span>
            {point.title}
          </div>


          {point.reasons.map(function(reason) {
            return (
              <MainBoard.MyReason
                key={reason.id}
                reason={reason}
              />
            );
          })}

        </div>
      </div>
    );
  }
});

MainBoard.MyReason = React.createClass({
  render: function() {
    var reason = this.props.reason;
    var isPros = reason.isPros;
    var typeClass = classnames({
      type: true,
      reason: true,
      pros: isPros,
      cons: !isPros
    });
    return (
      <div className="my-reason debate-label">
        <div className="wrapper">
          <div className="title">
            <span className={typeClass}>근거</span>
            {reason.title}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MainBoard;
