var React = require('react');

var Link = require('react-router').Link;

var BreadCrumb = React.createClass({
  render: function() {
    var title = this.props.title;
    return (
      <div className="container">
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>{title}</li>
        </ol>
      </div>
    );
  }
});

module.exports = BreadCrumb;
