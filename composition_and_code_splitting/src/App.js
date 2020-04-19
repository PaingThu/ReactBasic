import React from 'react';


  /* Toolbar Component
   * using porps.children (children of Toolbar Component )
   */
class Toolbar extends React.Component{
  render() {
    return (
      <div style = {{ background: 'cyan', padding : 10 }}>
        {this.props.children}

      </div>
    )
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <Toolbar>
          <h1> Hello React </h1>
          <h2> Component composition </h2>
        </Toolbar>
      </div>
    );
  }

}

export default App;
