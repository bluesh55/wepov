var React = require('react');

var Link = require('react-router').Link;
var $ = require('jquery');
var slick = require('slick-carousel');

var DebateMainApp = React.createClass({
  componentDidMount: function() {
    $(this.refs.slider).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true
    });
  },
  render: function() {
    return (
      <div id="HomeBanner">
        <div className="wrapper">
          <div id="Slider" ref="slider">
            <div className="outer">
              <div className="inner">
                <h1>WEPOV</h1>

                <h3>WEPOV는 우리를 뜻하는 WE와, 관점을 뜻하는 POV(Point Of View)의 합성어로,<br />비록 관점이 다르더라도 '우리 모두의 관점은 의미있다'는 뜻을 내포하고 있습니다.</h3>

              </div>
            </div>

            <div className="outer">
              <div className="inner">
                <h2>WEPOV에서는,</h2>
                <h3>
                관심있는 논쟁을 등록하고, 관련된 논점들을 정리해 설득력있게 보여줄 수 있습니다.<br />
                다른 사람이 개설한 논쟁에도 새로운 논점과 근거를 추가할 수 있습니다.<br />
                투표를 통해 논쟁에 대한 사용자들의 여론을 알아볼 수 있습니다. <br />
                댓글창에서 나와 다른 관점을 가진 사용자와 발전적인 토론이 가능합니다. <br />
                토론 후 의견이 변했다면, 논쟁에 대한 찬/반을 변경할 수 있습니다.<br />
                마이페이지에서 내가 찬성/반대를 표한 논쟁들을 모아 볼 수 있습니다. <br />
                </h3>
              </div>
            </div>

            <div className="outer">
              <div className="inner">
                <h2>WEPOV는,</h2>
                <h3>
                사회적 이슈가 되는 논쟁에 대해 양측의 입장을 균형있게 들을 수 있는<br />
                중립적인 토론의 교과서이자, 지식의 보고입니다
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DebateMainApp;
