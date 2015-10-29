var React = require('react');

var PointInput = React.createClass({
  onKeyDown: function(e) {
    var value = e.target.value;
    
    if(e.keyCode == 13) {
      this.props.addPoint(value);
    }
  },

  componentDidMount: function() {
    this.refs.input.focus();
  },

  render: function() {
    return (
      <div className="point-input">
        <input type="text" className="form-control" onKeyDown={this.onKeyDown} ref="input" />
      </div>
    );
  }
});

module.exports = PointInput;
