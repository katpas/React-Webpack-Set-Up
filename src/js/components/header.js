var React = require('react');

var Header = React.createClass({

  render: function () {

    return(
        <div className="header" onDoubleClick={this.props.doubleClickHandler}>
          <h1 className='header-text'>{this.props.title}</h1>
        </div>
      );
    }
  })

module.exports = Header;
