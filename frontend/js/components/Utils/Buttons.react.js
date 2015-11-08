var React = require('react');

var classnames = require('classnames');

var obj = {};

obj.LikeButton = React.createClass({
  render: function() {
    var isSelected = this.props.isSelected;

    var btnClass = classnames({
      'thumb-btn': true,
      'like': true,
      'voted': isSelected
    });

    return (
      <button className={btnClass} onClick={this.props.onClick}>
        <i className="fa fa-thumbs-o-up"></i>
      </button>
    );
  }
});

obj.DislikeButton = React.createClass({
  render: function() {
    var isSelected = this.props.isSelected;

    var btnClass = classnames({
      'thumb-btn': true,
      'dislike': true,
      'voted': isSelected
    });

    return (
      <button className={btnClass} onClick={this.props.onClick}>
        <i className="fa fa-thumbs-o-down"></i>
      </button>
    );
  }
});

module.exports = obj;
