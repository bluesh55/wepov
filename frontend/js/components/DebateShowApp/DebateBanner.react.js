var React = require('react');

var DebateBanner = React.createClass({
  render: function() {
    var debateData = this.props.debateData;

    return (
      <header className="page-title pt-light pt-plax-md-light"  style={{backgroundImage: "url(" + debateData.image.image.url + ")"}}>
        <div className="bg-overlay">
          <div className="container">
            <div className="row">

              <div className="col-sm-12 title">
                <h1>{debateData.title}</h1>
              </div>
              <div className="col-sm-6 info">
                <p>{debateData.content}</p>
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
