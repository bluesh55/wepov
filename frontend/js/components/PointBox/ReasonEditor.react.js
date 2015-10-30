var React = require('react');

var classnames = require('classnames');

var DebateActions = require('../../actions/DebateActions');


var ReasonEditor = React.createClass({

  onClick: function() {
    var point_id = this.props.point.id;
    var is_pros = this.props.prosEditorOpened;
    var title = this.refs.title.value;
    var content = this.refs.reason.value;

    DebateActions.postReason({
      title: title,
      content: content,
      is_pros: is_pros,
      point_id: point_id
    });
  },

  render: function() {
    var prosEditorOpened = this.props.prosEditorOpened;
    var consEditorOpened = this.props.consEditorOpened;

  
    var editorClass = classnames({
      'reason-input-wrapper': true,
      active: prosEditorOpened || consEditorOpened
    });

    return (
      <div className={editorClass}>

        <div className="form-group">
          <h4>한 줄 요약</h4>
          <input type="text" className="title form-control" ref="title" />
        </div>

        <div className="form-group">
          <h4>Reason</h4>
          <textarea className="reason-input form-control" rows="5" ref="reason" ></textarea>
        </div>

        <div className="form-group">
          <button className="btn" onClick={this.onClick}>작성하기</button>
        </div>
      </div>
    );
  }
});

module.exports = ReasonEditor;
