/** @jsx React.DOM */

var React = window.React;

require('./page.less');

var Page = React.createClass({

  render: function() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }

});

module.exports = Page;
