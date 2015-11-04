var React = require('react');

var Reason = require('./Reason.react');
var AddReasonButton = require('./AddReasonButton.react');
var ReasonEditor = require('./ReasonEditor.react');

var DebateActions = require('../../../actions/DebateActions');

var _ = require('underscore');

var Point = React.createClass({
  getInitialState: function() {
    return {
      prosEditorOpened: false,
      consEditorOpend: false,
      pointEditable: false
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

  onClickPostReason: function() {
    this.setState({
      consEditorOpened: false,
      prosEditorOpened: false
    });
  },

  onClickEditPoint: function() {
    this.setState({
      pointEditable: true
    });
  },

  onClickDeletePoint: function() {
  
  },

  onClickEdit: function() {
    var point = this.props.point;
    var edittedTitle = this.refs.editTitle.value;
    DebateActions.editPointTitle({
      edittedTitle: edittedTitle,
      id: point.id
    });

    this.setState({
      pointEditable: false
    });
  },

  render: function() {
    var debate = this.props.debate;
    var point = this.props.point;
    var reasons = point.reasons;

    var prosReasons = _.filter(reasons, function(obj) { return obj.is_pros });
    var consReasons = _.filter(reasons, function(obj) { return !obj.is_pros });

    var editBox = debate.cuid === point.user_id && this.state.pointEditable === false ? 
      (<Point.EditBox 
        onClickEditPoint={this.onClickEditPoint}
        onClickDeletePoint={this.onClickDeletePoint}
        />) : "";

    var pointTitle = this.state.pointEditable ? 
      (
        <span>
          <input type="text" defaultValue={point.title} ref="editTitle" />
          <button onClick={this.onClickEdit}>수정</button>
        </span>
      )
      :
      <span>{point.title}</span>;

    return (
      <div className="point">
        <h3 className="title">
          <i className="fa fa-balance-scale"></i>

          {pointTitle}
          {editBox}
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
          onClickPostReason={this.onClickPostReason}
        />
      </div>       
    );
  }
});

Point.EditBox = React.createClass({
  render: function() {
    return (
      <span className="edit-box">
        <span onClick={this.props.onClickEditPoint}>
          <i className="fa fa-pencil"></i>수정
        </span>
        <span onClick={this.props.onClickDeletePoint}>
          <i className="fa fa-trash-o"></i>삭제
        </span>
      </span>
    );
  }
});

module.exports = Point;
