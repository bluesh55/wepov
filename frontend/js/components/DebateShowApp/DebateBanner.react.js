var React = require('react');

var DebateBanner = React.createClass({
  render: function() {
    return (
      <header className="page-title pt-light pt-plax-md-light"  style={{backgroundImage: "url(" + debateImageURL + ")"}}>
        <div className="bg-overlay">
          <div className="container">
            <div className="row">

              <div className="col-sm-12 title">
                <h1>{debateTitle}</h1>
              </div>
              <div className="col-sm-6 info">
                <p>{debateContent}</p>
              </div>

              <div className="col-sm-6">
                <div className="progress-box">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '60%'}}></div>
                  </div>
                  <div className="progress-title pros">
                    찬성 60%
                  </div>
                  <div className="progress-title cons">
                    반대 40%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = DebateBanner;
