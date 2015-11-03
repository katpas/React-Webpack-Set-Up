var React = require('react');

var Footer = React.createClass({

  render: function () {

    return(
        <div className="footer" onDoubleClick={this.props.doubleClearHandler}>
          <p>{this.props.title}</p>
        </div>
      );
    }
  })

module.exports = Footer;
