var React = require('react');

var DebateMainApp = React.createClass({
  render: function() {
    return (
      <div id="home" className="agency2-hero">
        <div className="bg-overlay">
          <div id="large-header" className="large-header">
            <canvas id="demo-canvas" className="demo-canvas"></canvas>

            <div className="hero-content-wrapper">
              <div className="hero-content">
                <h1 className="hero-lead">Creative Agency</h1>
                <h4 className="h-alt hero-secondary">Web Design &amp; Development</h4>
                <a href="/debates/new" className="btn btn-light">새 논쟁 만들기</a>
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
