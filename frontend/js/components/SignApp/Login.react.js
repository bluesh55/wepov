var React = require('react');

function getReferer() {
  return location.hash.substring(1).split('_id=')[1];
}

var LoginApp = React.createClass({
  _id: null,
  componentWillMount: function() {
    this._id = getReferer();
  },
  render: function() {
    return (
      <form action="/users/sign_in" method="post">
        <input type="hidden" name="referer" value={this._id} />
        <input type="hidden" name="authenticity_token" value={this.props.token} />

        <div className="form-group">
          <label htmlFor="LoginEmail">이메일</label>
          <input type="email" className="form-control"
            id="LoginEmail" placeholder="이메일을 입력해주세요"
            name="user[email]" />
        </div>

        <div className="form-group">
          <label htmlFor="LoginPassword">비밀번호</label>
          <input type="password" className="form-control"
            id="LoginPassword" placeholder="비밀번호를 입력해주세요"
            name="user[password]" />
        </div>

        <input type="submit" name="commit" value="로그인" className="btn btn-primary" />
      </form>

    );
  }
});

module.exports = LoginApp;
