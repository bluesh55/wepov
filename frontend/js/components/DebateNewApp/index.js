var React = require('react');

var classnames = require('classnames');

var DebateNewApp = React.createClass({

  getInitialState: function() {
    return {
      imageStatus: false,
      titleStatus: false,
      contentStatus: false
    };
  },

  check: function() {
    var image = this.refs.image.value;
    var title = this.refs.title.value;
    var content = this.refs.content.value;

    var imageStatus = false;
    var titleStatus = false;
    var contentStatus = false;

    if(title)
      if(title.length < 40 && title.length >= 5)
        titleStatus = true;


    if(content)
      if(content.length < 300 && content.length >= 50)
        contentStatus = true;
    

    if(image)
      imageStatus = true;

    this.setState({
      imageStatus: imageStatus,
      titleStatus: titleStatus,
      contentStatus: contentStatus
    });
  },

  onSubmit: function(e) {
    this.check();

    if(!(this.state.imageStatus && this.state.titleStatus && this.state.contentStatus))
      e.preventDefault();
  },

  render: function() {
    var imageClass = classnames({
      nessesary: true,
      on: !this.state.imageStatus
    });

    var titleClass = classnames({
      nessesary: true,
      on: !this.state.titleStatus
    });

    var contentClass = classnames({
      nessesary: true,
      on: !this.state.contentStatus
    });
    return (
      <div className="container" id="DebateNewForm">
        <h1>새 논쟁 만들기</h1>
        <form className="debate-form" encType="multipart/form-data" method="post" acceptCharset="UTF-8" action="/debates" ref="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="image">* 논쟁 이미지<span className={imageClass}> - 논쟁과 관련된 이미지를 올려주세요.</span></label>
            <input type="file" id="image" name="image" className="form-control" ref="image" onChange={this.check}/>
          </div>
          <div className="form-group">
            <label htmlFor="input-title">* 논쟁 제목<span className={titleClass}> - 5자 이상 40자 미만으로 작성해주세요.</span></label>
            <input type="text" name="title" id="input-title" className="form-control" ref="title" onChange={this.check} />
          </div>

          <div className="form-group">
            <label htmlFor="input-desc">* 논쟁 간단 설명<span className={contentClass}> - 50자 이상 300자 미만으로 작성해주세요.</span></label>
            <textarea rows="5" cols="50" name="content" id="input-desc" className="form-control" ref="content" onChange={this.check}></textarea>
          </div>

          <div className="form-group">
            <button className="btn btn-success pull-right" ref="submitBtn">작성하기</button>
          </div>     
        </form>
      </div>
    );
  }
});

module.exports = DebateNewApp;
