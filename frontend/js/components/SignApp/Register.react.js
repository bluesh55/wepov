var React = require('react');

var RegisterApp = React.createClass({
  render: function() {
    return (
      <form action="/users" method="post" encType="multipart/form-data">
        <input type="hidden" name="authenticity_token" value={this.props.token} />

        <div className="form-group">
          <label htmlFor="Avatar">프로필 사진</label>
          <input type="file" name="user[avatar]" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="RegisterEmail">이메일</label>
          <input type="email" className="form-control"
            id="RegisterEmail" placeholder="이메일을 입력해주세요"
            name="user[email]" />
        </div>

        <div className="form-group">
          <label htmlFor="Name">이름 또는 닉네임</label>
          <input type="text" className="form-control"
            id="Name" placeholder="이름 또는 닉네임을 입력해주세요"
            name="user[name]" />
        </div>

        <div className="form-group">
          <label htmlFor="RegisterPassword">비밀번호</label>
          <input type="password" className="form-control"
            id="RegisterPassword" placeholder="비밀번호를 입력해주세요"
            name="user[password]" />
        </div>

        <div className="form-group">
          <label htmlFor="RePassword">비밀번호 확인</label>
          <input type="password" className="form-control"
            id="RePassword" placeholder="비밀번호를 한번 더 입력해주세요"
            name="user[password_confirmation]" />
        </div>

        <div className="form-group">
          <label htmlFor="Intro">소개</label>
          <textarea className="form-control"
            id="Intro" placeholder="자기소개를 해주세요"
            name="user[intro]" rows="9" />
        </div>

        <input type="submit" name="commit" value="가입하기" className="btn btn-primary" />
      </form>
    );
  }
});

module.exports = RegisterApp;
