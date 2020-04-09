import React from 'react';

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

 /*
   <pre>React Component called "App"</pre>
   To be a "React Component" class must have the following three facts
   1. class have to extend "React.Component"
   2. class must contain "render()" method
   3. class must return one "Element"
 */
class App extends React.Component {

  state = {
    items: [
      {id: 1, name: 'Apple',price: 0.99},
      {id: 2, name: 'Orange', price: 0.89}
    ]
  }
  // I've used "state" for the Component's data

  nameRef = React.createRef();
  priceRef = React.createRef();
  //I've used "ref" technology to manage input value

  add = () =>{
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.setState({
      items:[
        ...this.state.items,{id,name,price}
      ]
    });
    //I've used
    //"setState()" to change the values of state.
    //and "spread operator (...)" to spread the array content  of items.
    //and "property shorthand" (because : items's property name is same with variable name that I used as value in this scope.)
  }

  render(){
    return (
        <div>
          <h1> Hello React </h1>
          <ul>
            {this.state.items.map(i => {
              return(
                <Item
                  key={i.id}
                  //without key in a list console show warning as following
                  //Warning: Each child in  a list should have a unique "key" prop.
                  //And React cannot use "Virtual DOM" effect if list has no key so you should set "key" prop.
                  name = {i.name}
                  price = {i.price}
                />
              )
            })}
          </ul>
          <input type = "text" ref = {this.nameRef} /><br/>
          <input type = "text" ref = {this.priceRef} /><br/>
          <button onClick={this.add}>Add</button>
        </div>
      )
  }
  //render() function returns HTML structure.
  //This HTML structure is HTML(JSX) structure.
  //To be a react component, must return only one Element so I've written in one <div></div>
}

export default App;
