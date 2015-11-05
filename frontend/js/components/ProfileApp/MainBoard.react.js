var React = require('react');

var $ = require('jquery');
var slick = require('slick-carousel');


var MainBoard = React.createClass({
  render: function() {
    return (
      <div className="main dashboard">
        <MainBoard.VotedDebatesBox />
        <MainBoard.MyDebatesBox />
      </div>
    );
  }
});


/* VotedDebatesBox */
MainBoard.VotedDebatesBox = React.createClass({
  componentDidMount: function() {
    $('#VotedDebatesSlider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  },
  render: function() {
    return (
      <div id="VotedDebatesBox">
        <div className="wrapper">
          <div className="title">
            투표한 논쟁
          </div>

          <div id="VotedDebatesSlider">
            <div><MainBoard.VotedDebatesSliderItem /></div>
            <div><MainBoard.VotedDebatesSliderItem /></div>
            <div><MainBoard.VotedDebatesSliderItem /></div>
            <div><MainBoard.VotedDebatesSliderItem /></div>
            <div><MainBoard.VotedDebatesSliderItem /></div>
            <div><MainBoard.VotedDebatesSliderItem /></div>
          </div>
        </div>
      </div>
    );
  }
});

/* VotedDebatesBox => VotedDebatesSliderItem */
MainBoard.VotedDebatesSliderItem = React.createClass({
  render: function() {
    return (
      <div className="item-wrapper">
        <div className="item">
          <img src="#" />
          <div className="title">
            2015 한국사 교과서 국정화 논쟁
          </div>

          <div className="count-wrapper">
            <span className="comments-count">
              댓글 수 235
            </span>
            <span className="points-count">
              논점 10
            </span>
          </div>

          <div className="proscons-count">
            <span className="pros-count">
              찬성 210명
            </span>

            <span className="cons-count">
              1123명 반대
            </span>
          </div>
        </div>
      </div>
    );
  }
});


/* MyDebatesBox */
MainBoard.MyDebatesBox = React.createClass({
  componentDidMount: function() {
    $('#MyDebatesSlider').slick();
  },
  render: function() {
    return (
      <div id="MyDebatesBox">
        <div className="wrapper">
          <div className="title">
            만든 논쟁들
          </div>

          <div id="MyDebates">
            <MainBoard.MyDebate />
            <MainBoard.MyDebate />
          </div>
        </div>
      </div>
    );
  }
});

/* MyPoints And Reasons */
MainBoard.MyDebate = React.createClass({
  render: function() {
    return (
      <div className="my-debate debate-label">
        <div className="wrapper">
          <div className="title">
            <span className="type">논쟁</span>
            2015 한국사 교과서 국정화 논쟁
          </div>
          <MainBoard.MyPoint />
        </div>
      </div>
    );
  }
});

/* MyPoints And Reasons */
MainBoard.MyPoint = React.createClass({
  render: function() {
    return (
      <div className="my-point debate-label">
        <div className="wrapper">
          <div className="title">
            <span className="type">논점</span>
            하나의 교과서로 전 국민
          </div>

          <MainBoard.MyReason />
        </div>
      </div>
    );
  }
});

MainBoard.MyReason = React.createClass({
  render: function() {
    return (
      <div className="my-reason debate-label">
        <div className="wrapper">
          <div className="title">
            <span className="type">근거</span>
            모두가 인정할 수 있는 하나의 교과서로 전 국민이 배워야, 사회적 통합을 이룰 수 있다.
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MainBoard;
