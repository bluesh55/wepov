var React = require('react');

var DebateNewApp = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h1>새 논쟁 만들기</h1>
        <form className="debate-form" encType="multipart/form-data" method="post" acceptCharset="UTF-8" action="/debates">
          <div className="form-group">
            <input type="file" name="image" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="input-title">논쟁 제목</label>
            <input type="text" name="title" id="input-title" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="input-desc">논쟁 간단 설명</label>
            <textarea rows="5" cols="50" name="content" id="input-desc" className="form-control"></textarea>
          </div>

          <div className="form-group">
            <button className="btn">작성하기</button>
          </div>     
        </form>
      </div>
    );
  }
});

module.exports = DebateNewApp;
