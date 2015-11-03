var React = require('react');


var MainBoard = React.createClass({
  render: function() {
    return (
      <div className="dashboard" style={{minHeight: this.props.minHeight}}>
        MainBoard
      </div>
    );
  }
});

module.exports = MainBoard;
