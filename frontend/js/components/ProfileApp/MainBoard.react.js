var React = require('react');

var $ = require('jquery');
var slick = require('slick-carousel');


var MainBoard = React.createClass({
  render: function() {
    return (
      <div className="main dashboard" style={{minHeight: this.props.minHeight}}>
        <MainBoard.VotedDebatesBox />
      </div>
    );
  }
});

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

MainBoard.VotedDebatesSliderItem = React.createClass({
  render: function() {
    return (
      <div className="item-wrapper">
        <div className="item">
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

module.exports = MainBoard;
