import React from 'react';


class Item extends React.Component{
  render(){
    return (
      <li>
        {this.props.name},${this.props.price}
      </li>
    )
  }
}

class App extends React.Component {
  render(){
    return (
        <div>
          <h1> Hello React </h1>
          <ul>
            <Item name = "Apple" price = "0.99"/>
            <Item name = "orange" price = "0.89"/>
          </ul>
        </div>
      )
  }
}

export default App;
