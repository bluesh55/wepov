var React = require('react');

var Reason = require('./Reason.react');

var DebateActions = require('../../../actions/DebateActions');

var _ = require('underscore');
var classnames = require('classnames');

var Point = React.createClass({
  render: function() {
    var debate = this.props.debate;
    var point = this.props.point;
    var reasons = point.reasons;

    var prosReasons = _.filter(reasons, function(obj) { return obj.is_pros });
    var consReasons = _.filter(reasons, function(obj) { return !obj.is_pros });

    return (
      <div className="point">
        <div className="wrapper">
          <Point.Title
            debate={debate}
            point={point}
            index={this.props.index}
          />

          <div className="procon-wrapper">
            <div className="pros-wrapper pc-box">
              <Point.ReasonsBox
                point={point}
                className="pros box-item"
                reasons={prosReasons}
                title="찬성"
                isPros={true}
              />
            </div>

            <div className="cons-wrapper pc-box">
              <Point.ReasonsBox
                point={point}
                className="cons box-item"
                reasons={consReasons}
                title="반대"
                isPros={false}
              />
            </div>
          </div>

        </div>
      </div>       
    );
  }
});

Point.Title = React.createClass({
  getInitialState: function() {
    return {
      pointEditable: false
    };
  },

  onClickEditPoint: function() {
    this.setState({
      pointEditable: true
    });
  },

  /* 삭제 기능 수행 */
  onClickDeletePoint: function() {
    var point = this.props.point;
    DebateActions.deletePoint({
      id: point.id
    });
  },

  /* 수정 기능 수행 */
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


  /* 수정 취소 */
  onClickCancel: function() {
    this.setState({
      pointEditable: false
    });
  },

  render: function() {
    var debate = this.props.debate;
    var point = this.props.point;
    var editView;

    var titleView = this.state.pointEditable ?
      (
        <input type="text" defaultValue={point.title} ref="editTitle" />
      ) :
      (
        <span>{point.title}</span>
      );

    if(this.state.pointEditable && debate.cuid === point.user_id) {
      editView = (
        <div className="dynamic">
          <span onClick={this.onClickEdit}>
            <i className="fa fa-pencil"></i>수정
          </span>
          <span onClick={this.onClickCancel}>
            <i className="fa fa-times"></i>취소
          </span>
        </div>
      );
    } else if(!this.state.pointEditable && debate.cuid === point.user_id) {
      editView = (
        <div className="static">
          <span onClick={this.onClickEditPoint}>
            <i className="fa fa-pencil"></i>수정
          </span>
          <span onClick={this.onClickDeletePoint}>
            <i className="fa fa-trash-o"></i>삭제
          </span>
        </div>
      );
    }

    return (
      <header>
        <div className="title">
          <img src="/images/point.png" />
          <span className="prefix">
          {"논점 " + (this.props.index + 1)}
          </span>

          {titleView}
        </div>

        <div className="edit-tools">
          {editView}
        </div>
      </header>
    );
  }
});

Point.ReasonsBox = React.createClass({
  getInitialState: function() {
    return {
      isReasonEditorOpened: false
    };
  },

  onClickAppendReason: function() {
    this.setState({
      isReasonEditorOpened: true
    });
  },

  onClickPostReason: function() {
    var title = this.refs.title.value;
    var content = this.refs.reason.value;
    var isPros = this.props.isPros;
    var point = this.props.point;

    if(title != "" && content != "") {
      DebateActions.postReason({
        title: title,
        content: content,
        is_pros: isPros,
        point_id: point.id
      });

      this.refs.title.value = "";
      this.refs.reason.value = "";
      
      this.setState({
        isReasonEditorOpened: false
      });
    }
  },

  render: function() {
    var cls = this.props.className;
    var reasons = this.props.reasons;
    var title = this.props.title;

    var editorClass = classnames({
      'reason-editor-wrapper': true,
      'active': this.state.isReasonEditorOpened
    });

    var button = this.state.isReasonEditorOpened ?
      <button onClick={this.onClickPostReason}>작성하기</button> :
      <button onClick={this.onClickAppendReason}>근거 추가하기 <i className="fa fa-plus"></i></button>;

    var reasonsView = reasons.length > 0 ?
      reasons.map(function(reason, index) {
        return <Reason reason={reason} key={reason.id} index={index} />;
      }) :
      (
        <Point.EmptyReason />
      );

    return (
      <div className={cls}>
        <div className="title">
          <span>{title}</span>
        </div>

        <div className="reasons">
          {reasonsView}
        </div>

        <div className={editorClass}>
          <div className="form-group">
            <h4>근거의 제목</h4>
            <input type="text" className="title form-control" ref="title" placeholder="근거를 간단히 요약해주세요" />
          </div>

          <div className="form-group">
            <h4>자세히</h4>
            <textarea className="reason-input form-control" rows="5" ref="reason" placeholder="근거에 대한 설명을 남겨주세요."></textarea>
          </div>
        </div>

        <div className="append-reason">
          {button}
        </div>

      </div>
    );
  }
});

Point.EmptyReason = React.createClass({
  render: function() {
    return (
      <div className="empty-reason">
        첫 번째 근거를 입력해보세요!
      </div>
    );
  }
});

module.exports = Point;
