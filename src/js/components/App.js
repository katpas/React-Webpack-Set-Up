var React = require('react');
var Header = require('./header.js');
var Footer = require('./footer.js');
var List = require('./list.js');

var App = React.createClass({

  getInitialState: function (){
    return {
        items: ['apple', 'orange']
    };
  },
  //
  clearFridge: function () {
    this.setState({items:[]});
  },

  addMoreDrinks: function () {
    var items = this.state.items;
    var fruit = items.concat(["apple", "apple"]);
    this.setState({items: fruit});
  },

  render: function () {


    return(
        <div className="app-container">
          <Header doubleClickHandler={this.addMoreDrinks} title="EssentialsFridge"/>
          <List items={this.state.items}/>
          <Footer doubleClearHandler={this.clearFridge} title="footer"/>
      </div>
    );
  }
});

module.exports = App;
