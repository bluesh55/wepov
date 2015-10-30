var React = require('react');

var DebateActions = require('../../../actions/DebateActions');

var AddPointButton = React.createClass({
  onClick: function(e) {

    DebateActions.clickAddPointButton();

    e.stopPropagation();
    e.preventDefault();
  },
  render: function() {
    return (
      <div className="add-point">
        <button className="btn-ghost btn-small btn-round" onClick={this.onClick}>
          논점 추가
        </button>
      </div>
    );
  }
});

module.exports = AddPointButton;
