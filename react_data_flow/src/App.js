import React from 'react';

//React Component called "AddForm"
class AddForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.props.add(name,price);
    //accepting add() of App Component
  }

  render(){
    return (
      <div>
        <input type = "text" ref = {this.nameRef} /> <br/>
        <input type = "text" ref = {this.priceRef} /> <br/>
        <button onClick = {this.add}> Add </button>
      </div>
    )
  }
}

// React Component called "Item"
class Item extends React.Component{
  render(){
    return (
      <li>
        {this.props.name},${this.props.price}
      </li>
    )
  }
}

class Title extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <Title name = {this.props.name} />
      </div>
    )
  }
}

//React Component called "App"
class App extends React.Component {

  state = {
    items: [
      {id: 1, name: 'Apple',price: 0.99},
      {id: 2, name: 'Orange', price: 0.89}
    ]
  }

  add = (name,price) =>{
    let id = this.state.items.length + 1;

    this.setState({
      items:[
        ...this.state.items,{id,name,price}
      ]
    });
  }

  render(){
    return (
        <div>
          <Header name = " App Title" />
          <h1> Hello React </h1>
          <ul>
            {this.state.items.map(i => {
              return(
                <Item
                  key={i.id}
                  name = {i.name}
                  price = {i.price}
                />
              )
            })}
          </ul>
          <AddForm add = {this.add}/>
        </div>
      )
  }
  //AddForm Component with add property that has add() of App Component
}

export default App;
