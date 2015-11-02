var React = require('react');

var DebateActions = require('../actions/DebateActions');
var DebateStore   = require('../stores/DebateStore');


var Debates = require('./DebateMainApp/Debates.react');

var getStateFromStores = function() {
  return {
    debatesData: DebateStore.getDebatesData()
  };
};

var DebateMainApp = React.createClass({
  _onChange: function() {
    this.setState(getStateFromStores());
  },

  /* props로 초기화하면 될 듯 */
  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    DebateStore.addChangeListener(this._onChange);
    
    DebateActions.readDebates();
  },

  render: function() {
    return (
      <div id="app">
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

        <Debates
          debatesData={this.state.debatesData}
        />
      </div>
    );
  }
});

module.exports = DebateMainApp;
