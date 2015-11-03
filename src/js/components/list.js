var React = require('react');

var List = React.createClass({

  render: function () {
    var items = this.props.items.map(function(item) {
      return <p>{item}</p>;
    });

    return(
        <div className="list">
          <p>{items}</p>
        </div>
      );
    }
  })

module.exports = List;
