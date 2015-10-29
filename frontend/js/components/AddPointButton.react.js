var React = require('react');

var AddPointButton = React.createClass({
  onClick: function(e) {
    this.props.onAddButtonClick();

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
