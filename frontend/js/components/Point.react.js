var React = require('react');

var Reason = require('./Reason.react');
var AddReasonButton = require('./AddReasonButton.react');

var Point = React.createClass({
  render: function() {
    var point = this.props.point;
    var reasons = point.reasons;

    var prosReasons = reasons ? reasons.pros : [];
    var consReasons = reasons ? reasons.cons : [];

    return (
      <div classNameName="point">
        <div className="point">
          <h3 className="title">
            <i className="fa fa-balance-scale"></i>
            <span>{point.title}</span>
          </h3>
          <div className="procon row">
            <div className="col-md-6 pro">
              <div className="title">
                <span className="fa-stack">
                  <i className="fa fa-check fa-stack-1x"></i>
                  <i className="fa fa-circle-o fa-stack-2x"></i>
                </span>
                <span>
                  찬성
                </span>
              </div>

              <div className="reasons">
                {prosReasons.map(function(reason) {
                  return <Reason reason={reason} />;
                })}
                
                <AddReasonButton />
              </div>
            </div>
            <div className="col-md-6 con">
              <div className="title">
                <span className="fa-stack">
                  <i className="fa fa-times fa-stack-1x"></i>
                  <i className="fa fa-circle-o fa-stack-2x"></i>
                </span>
                <span>
                  반대
                </span>
              </div>

              <div className="reasons">
                {consReasons.map(function(reason) {
                  return <Reason reason={reason} />;
                })}
                
                <AddReasonButton />
              </div>
            </div>
          </div>
        </div>       
      </div>
    );
  }
});

module.exports = Point;
