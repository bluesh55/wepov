var React = require('react');

var Debate = require('./Debate.react');

var Debates = React.createClass({

  render: function() {
    var debatesData = this.props.debatesData;

    return (
      <section id="DebatesList" className="">
        <div className="container">
          <div className="row">
            {debatesData.map(function(debate) {
              return (
                <Debate
                  key={debate.id}
                  debate={debate}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Debates;
