var React = require('react');

var PointInput = React.createClass({
  onKeyDown: function(e) {
    var value = e.target.value;
    
    if(e.keyCode == 13) {
      this.props.addPoint(value);
    }
  },

  render: function() {
    return (
      <div className="point-input">
        <input type="text" className="form-control" onKeyDown={this.onKeyDown}/>
      </div>
    );
  }
});

module.exports = PointInput;
