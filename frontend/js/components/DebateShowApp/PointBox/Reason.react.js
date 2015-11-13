var React = require('react');
var classnames = require('classnames');

var DebateActions = require('../../../actions/DebateActions');

var Reason = React.createClass({
  getInitialState: function() {
    return {
      show: false,
      reasonEditable: false
    };
  },

  showContent: function() {
    this.setState({
      show: true
    });
  },

  hideContent: function() {
    this.setState({
      show: false
    });
  },

  onClickDelete: function() {
    var reason = this.props.reason;

    DebateActions.deleteReason({
      id: reason.id
    });
  },

  render: function() {
    var debate= this.props.debate;
    var reason = this.props.reason;

    var prefixClass = classnames({
      prefix: true,
      pros: reason.is_pros,
      cons: !reason.is_pros
    });

    var contentClass = classnames({
      content: true,
      show: this.state.show
    });

    var button = this.state.show ?
      (
        <button className="toggle" onClick={this.hideContent}>
          접기 <i className="fa fa-angle-up"></i>
        </button>
      ) :
      (
        <button className="toggle" onClick={this.showContent}>
          보기 <i ckassName="fa fa-angle-down"></i>
        </button>
      );

    var editTools = debate.cuid == reason.user_id ?
      (
        <span className="delete" onClick={this.onClickDelete}>
        삭제
        </span>
      ) :
      null;

    return (
      <div className="reason-wrapper">
        <div className={prefixClass}>
          {"근거" + (this.props.index + 1)}
        </div>
        <div className="reason">
          <div className="title">
          {reason.title}
          </div>

          <div className="edit-tools">
            {editTools}
          </div>

          <div className={contentClass}>
          {reason.content}
          </div>

          {button}

        </div>
      </div>
    );
  }
});

module.exports = Reason;
