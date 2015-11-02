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
              <h2>Latest from our blog</h2>
              <span className="subheading">Check out our blog to see what were up to</span>
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
