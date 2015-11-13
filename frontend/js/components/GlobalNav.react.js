var React = require('react');
var ReactDOM = require('react-dom');
var Link  = require('react-router').Link;

var GlobalNav = React.createClass({
  onClickMenuItem: function() {
    $(this.refs.mobile_menu_btn.dataset.target).collapse('toggle');
  },

  render: function() {
    var self = this;
    var globalData = this.props.globalData;
    var menuItems = [
      {
        text: "새 논쟁 만들기",
        link: "/debates/new",
        state: globalData.is_signed
      },
      {
        text: "프로필",
        link: "/profile/" + globalData.id,
        state: globalData.is_signed
      },
      {
        text: "로그인",
        link: "/users/sign_in",
        state: !globalData.is_signed
      },
      {
        text: "로그아웃",
        link: "/users/sign_out",
        method: "delete",
        state: globalData.is_signed,
        refresh: true
      }
    ];

    return (
      <nav className="navbar navbar-default navbar-fixed-top mega navbar-inverse navbar-trans" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" ref="mobile_menu_btn">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              <img src={globalData.brand_image_url} />
            </Link>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              
              {menuItems.map(function(item, index) {
                return item.state ?
                  <GlobalNav.Item
                    key={index}
                    link={item.link}
                    method={item.method}
                    refresh={item.refresh}
                    onClick={self.onClickMenuItem}
                    >{item.text}</GlobalNav.Item> : null;
              })}

            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

GlobalNav.Item = React.createClass({
  render: function() {
    var link = this.props.link;
    var method = this.props.method || "get";
    var refresh = this.props.refresh || false;

    var view;

    if(refresh)
      view = <a href={link} data-method={method}>{this.props.children}</a>;
    else
      view = <Link to={link}>{this.props.children}</Link>;

    return (
      <li onClick={this.props.onClick}>{view}</li>
    );
  }
});

module.exports = GlobalNav;
