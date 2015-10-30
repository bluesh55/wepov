var React = require('react');

var DebateActions = require('../../actions/DebateActions');

var PointInput = React.createClass({
  onKeyDown: function(e) {
    var value = e.target.value;
    if(e.keyCode == 13) {
      e.target.value = "";
      DebateActions.postPoint({
        debate_id: this.props.debateData.id,
        title: value
      });
    }
  },

  componentDidUpdate: function() {
    this.refs.input.focus();
  },

  render: function() {
    var state = this.props.pointInputState;

    var styles = {
      display: state ? "block" : "none"
    };

    return (
      <div className="point-input" style={styles}>
        <input type="text" className="form-control" onKeyDown={this.onKeyDown} ref="input" />
      </div>
    );
  }
});

module.exports = PointInput;
