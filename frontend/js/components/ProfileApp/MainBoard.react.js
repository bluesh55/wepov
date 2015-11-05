var React = require('react');

var $ = require('jquery');
var slick = require('slick-carousel');


var MainBoard = React.createClass({
  render: function() {
    return (
      <div className="main dashboard" style={{minHeight: this.props.minHeight}}>
        <MainBoard.VotedDebatesBox />
        <MainBoard.MyDebatesBox />
        <MainBoard.MyPointsAndReasonsBox />
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
      <div id="MyDebatesBox" className="col-md-12 col-sm-12">
        <div className="wrapper">
          <div className="title">
            만든 논쟁들
          </div>

          <div id="MyDebatesSlider">
            <div><MainBoard.MyDebatesSliderItem /></div>
            <div><MainBoard.MyDebatesSliderItem /></div>
          </div>
        </div>
      </div>
    );
  }
});

/* MyDebatesBox => MyDebatesSliderItem */
MainBoard.MyDebatesSliderItem = React.createClass({
  render: function() {
    return (
       <div className="item-wrapper">
        <div className="item">
          <div className="info-wrapper">
            <img src="#" />
            <div className="info">
              <div className="progress-bar">
              </div>

              <div className="title">
                2015 한국사 교과서 국정화 논쟁
              </div>
              
              <div className="description">
                검정 국사 교과서 중 보수적인 논조였던 교학사의 고등학교 역사교과서가 부실 논란 후 검정 취소되었다. 이후, 검정교과서의 대다수가 국사를 부정적으로 서술하며, 좌편향되었다는 논리로, 정부주도로 국정교과서로 환원하려는 움직임이 일고 있다.
              </div>
            </div>
          </div>
        </div>
      </div>     
    );
  }
});


/* MyPointsAndReasonsBox */
MainBoard.MyPointsAndReasonsBox = React.createClass({
  render: function() {
    return (
      <div id="MyPointsAndReasonsBox" className="col-md-12 col-sm-12">
        <div className="wrapper">
          MyPointsAndReasonsBox
        </div>
      </div>
    );
  }
});

module.exports = MainBoard;
