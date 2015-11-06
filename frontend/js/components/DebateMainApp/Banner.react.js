var React = require('react');

var Link = require('react-router').Link;

var DebateMainApp = React.createClass({
  render: function() {
    return (
      <div id="home" className="agency2-hero">
        <div className="bg-overlay">
          <div id="large-header" className="large-header">
            <canvas id="demo-canvas" className="demo-canvas"></canvas>

            <div className="hero-content-wrapper">
              <div className="hero-content">
                <h1 className="hero-lead">Wepov</h1>
                <h4 className="h-alt hero-secondary wepov-desc">WEPOV는 우리를 뜻하는 WE와, 관점을 뜻하는 POV(Point Of View)의 합성어로,
                비록 관점이 다르더라도 '우리 모두의 관점은 의미있다'는 뜻을 내포하고 있습니다.</h4>
                <Link to={`/debates/new`} className="btn btn-light">새 논쟁 만들기</Link>
                <a href="#about" className="scroller">
                  <span className="scroller-text">scroll down</span>
                  <span className="linea-basic-magic-mouse"></span>
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
});

module.exports = DebateMainApp;
