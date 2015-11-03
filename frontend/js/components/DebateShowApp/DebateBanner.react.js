var React = require('react');

var DebateActions = require('../../actions/DebateActions');

var DebateBanner = React.createClass({
  updateChart: function() {
    var debate = this.props.debateData;

    var data = [
      {
        value: debate.pros_count,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "찬성"
      },
      {
        value: debate.cons_count,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "반대"
      }
    ];

    var options = {
    };

    if(this.refs.chart) {
      var ctx = this.refs.chart.getContext("2d");
      var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
    }
  },

  componentDidMount: function() {
    this.updateChart();
  },

  componentDidUpdate: function() {
    this.updateChart();
  },

  render: function() {
    var debateData = this.props.debateData;
    var imageURL = debateData.image.image.url;

    var style = imageURL ? {
      backgroundImage: "url(" + imageURL + ")"
    } :
    null;

    var isVoteEmpty = debateData.pros_count == 0 && debateData.cons_count == 0;


    return (
      <header className="page-title pt-light pt-plax-md-light"  style={style}>
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
                {isVoteEmpty ? 
                  <DebateBanner.EmptyVote id="progressBox" /> :
                  <canvas id="progressBox" ref="chart" />
                }

                <DebateBanner.VoteBox
                  debateData={debateData}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
});


/* Empty Vote Block */
DebateBanner.EmptyVote = React.createClass({

  render: function() {
    return (
      <div id={this.props.id} className="empty">
        가장 먼저 투표를 해보세요!
      </div>
    );
  }
});


/* Vote Box */
DebateBanner.VoteBox = React.createClass({
  onClickPros: function() {
    var debate = this.props.debateData;
    DebateActions.clickPros(debate.id);
  },

  onClickCons: function() {
    var debate = this.props.debateData;
    DebateActions.clickCons(debate.id); 
  },

  render: function() {
    return (
      <div id="voteBox">
        <button className="btn" onClick={this.onClickPros}>찬성</button>
        <button className="btn" onClick={this.onClickCons}>반대</button>
      </div>
    );
  }
});

module.exports = DebateBanner;
