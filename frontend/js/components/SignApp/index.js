var React = require('react');
var classnames = require('classnames');

var Login        = require('./Login.react');
var Register     = require('./Register.react');


function getCSRFToken() {
  return $('meta[name=csrf-token]')[0].getAttribute('content'); 
}

var SignApp = React.createClass({
  getInitialState: function() {
    return {
      token: getCSRFToken()
    };
  },
  render: function() {
    var isLoginPage = this.props.route.type == "login" ? true : false;
    
    var loginCollapseClass = classnames({
      "panel-collapse": true,
      "collapse": true,
      "in": isLoginPage
    });

    var registerCollapseClass = classnames({
      "panel-collapse": true,
      "collapse": true,
      "in": !isLoginPage
    });
    return (
      <div id="SignApp">
        <div className="bg-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-3 col-md-6">
                <div className="panel-group" id="login-accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel top-panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#login-accordion" href="#collapseOne" aria-expanded={isLoginPage.toString()} aria-controls="collapseOne">
                          로그인
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className={loginCollapseClass} role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">

                        <div className="form-login">
                          <Login token={this.state.token} />
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="panel bottom-panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#login-accordion" href="#register-login-page-2" aria-expanded={isLoginPage.toString()} aria-controls="register-login-page-2">
                          회원 가입
                        </a>
                      </h4>
                    </div>
                    <div id="register-login-page-2" className={registerCollapseClass} role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <div className="form-register">
                          <Register token={this.state.token} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SignApp;
