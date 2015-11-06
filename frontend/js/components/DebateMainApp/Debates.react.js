var React = require('react');

var Debate = require('./Debate.react');

var Debates = React.createClass({

  render: function() {
    var debatesData = this.props.debatesData;

    return (
      <div className="gray-bg">
        <section id="blog" className="section container blog-columns blog-preview">
          <div className="row">
            <header className="sec-heading">
              <h2>WEPOV에서는</h2>
              <span className="subheading">관심있는 논쟁을 등록하고, 관련된 논점들을 정리해 설득력있게 보여줄 수 있습니다.</span>
            </header>

            {debatesData.map(function(debate) {
              return (
                <Debate
                  key={debate.id}
                  debate={debate}
                />
              );
            })}

          </div>
        </section>
      </div>
    );
  }
});

module.exports = Debates;
