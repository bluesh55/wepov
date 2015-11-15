var React = require('react');
var Link = require('react-router').Link;

var Buttons = require('../Utils/Buttons.react');

var classnames = require('classnames');

var DebateActions = require('../../actions/DebateActions');


var DebateBanner = React.createClass({
  updateChart: function() {
    var debate = this.props.debateData;

    var data = [
      {
        value: debate.pros_count,
        color:"#7cc7ff",
        label: "찬성"
      },
      {
        value: debate.cons_count,
        color: "#ff7676",
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
    var isSigned = this.props.isSigned;
    var debateData = this.props.debateData;
    var imageURL = debateData.image.image.url;

    var style = imageURL ? {
      backgroundImage: "url(" + imageURL + ")"
    } :
    null;

    var isVoteEmpty = debateData.pros_count == 0 && debateData.cons_count == 0;


    return (
      <div id="DebateBanner" style={style}>
        <div className="wrapper">
          <div className="banner-image">
            <img src={imageURL} />
          </div>
          <div className="contents">
            <h1 className="title">{debateData.title}</h1>
            <div className="author">
              by <Link to={"/profile/" + debateData.user_id}>
                  <span className="name">{debateData.name}</span>
                </Link>
            </div>
            <div className="date">
              {debateData.created_at}
            </div>
            <p className="content">{debateData.content}</p>
          </div>
          <div className="chart">
            {isVoteEmpty ? 
              <DebateBanner.EmptyChart id="EmptyChart" /> :
              <canvas id="Chart" ref="chart" key={Date.now()} />
            }

            {isSigned ?
              (<DebateBanner.VoteBox
                debateData={debateData}
              />) :
              (
               <div className="vote-login-msg">투표하시려면 <Link to={"/users/sign_in#_id=" + debateData.id}>로그인</Link> 해주세요</div>
              )
            }
          </div>

          <DebateBanner.FBLike
            did={debateData.id}
          />
        </div>
      </div>
    );
  }
});

DebateBanner.FBLike = React.createClass({
  render: function() {
    var did = this.props.did;
    return (
      <div className="fb-wrapper">
        <div className="fb-like"
             data-href={"http://www.wepov.com/" + did}
             data-layout="button_count" data-action="like"
             data-show-faces="true" data-share="false" />

        <div className="fb-share-button"
             data-href={"http://www.wepov.com/" + did}
             data-layout="button_count" />
      </div>
    );
  }
});


/* Empty Vote Block */
DebateBanner.EmptyChart = React.createClass({

  render: function() {
    return (
      <div id={this.props.id}>
        <div>가장 먼저 투표를 해보세요!</div>
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
    var debate = this.props.debateData;
    var isVoted = debate.isVoted;
    var isPros = debate.isPros;

    return (
      <div id="VoteBox">
        <div className="wrapper">
          <Buttons.LikeButton
            isSelected={isPros == true}
            onClick={this.onClickPros}
          />
          <div className="desc">{debate.pros_count + "명이 찬성합니다."}</div>
        </div>

        <div className="wrapper">
          <Buttons.DislikeButton
            isSelected={isPros == false}
            onClick={this.onClickCons}
          />
          <div className="desc">{debate.cons_count + "명이 반대합니다."}</div>
        </div>
      </div>
    );
  }
});




module.exports = DebateBanner;
