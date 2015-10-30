var React = require('react');

var classnames = require('classnames');

var AddReasonButton = React.createClass({
  onClick: function() {
    this.props.onClickAddReason();
  },

  render: function() {
    var editorOpened = this.props.isReasonEditorOpened;

    var buttonClass = classnames({
      'add-reason': true,
      active: editorOpened
    });

    return (
      <div className={buttonClass}>
        <button onClick={this.onClick}>근거 추가하기 <i className="fa fa-plus"></i></button>
      </div>
    );
  }
});

module.exports = AddReasonButton;
