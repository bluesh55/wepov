var React = require('react');

var Reason = require('./Reason.react');
var AddReasonButton = require('./AddReasonButton.react');
var ReasonEditor = require('./ReasonEditor.react');

var _ = require('underscore');

var Point = React.createClass({
  getInitialState: function() {
    return {
      prosEditorOpened: false,
      consEditorOpend: false
    };
  },

  onClickAddProsReason: function() {
    this.setState({
      prosEditorOpened: true,
      consEditorOpened: false
    });
  },

  onClickAddConsReason: function() {
    this.setState({
      consEditorOpened: true,
      prosEditorOpened: false
    });
  },

  render: function() {
    var point = this.props.point;
    var reasons = point.reasons;

    var prosReasons = _.filter(reasons, function(obj) { return obj.is_pros });
    var consReasons = _.filter(reasons, function(obj) { return !obj.is_pros });

    return (
      <div className="point">
        <h3 className="title">
          <i className="fa fa-balance-scale"></i>
          <span>{point.title}</span>
        </h3>

        <div className="procon row">
          <div className="col-md-6 pro">
            <div className="title">
              <span className="fa-stack">
                <i className="fa fa-check fa-stack-1x"></i>
                <i className="fa fa-circle-o fa-stack-2x"></i>
              </span>
              <span>
                찬성
              </span>
            </div>

            <div className="reasons">
              {prosReasons.map(function(reason) {
                return <Reason reason={reason} key={reason.id}/>;
              })}

              <AddReasonButton
                onClickAddReason={this.onClickAddProsReason}
                isReasonEditorOpened={this.state.prosEditorOpened}
              />
            </div>
          </div>
          <div className="col-md-6 con">
            <div className="title">
              <span className="fa-stack">
                <i className="fa fa-times fa-stack-1x"></i>
                <i className="fa fa-circle-o fa-stack-2x"></i>
              </span>
              <span>
                반대
              </span>
            </div>

            <div className="reasons">
              {consReasons.map(function(reason) {
                return <Reason reason={reason} key={reason.id} />;
              })}
              <AddReasonButton
                onClickAddReason={this.onClickAddConsReason}
                isReasonEditorOpened={this.state.consEditorOpened}
              />
            </div>
          </div>
        </div>

        <ReasonEditor
          point={point}
          prosEditorOpened={this.state.prosEditorOpened}
          consEditorOpened={this.state.consEditorOpened}
        />
      </div>       
    );
  }
});

module.exports = Point;
