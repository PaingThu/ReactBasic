import React from 'react';

//Toolbar Component
class Toolbar extends React.Component {
  render() {
    return (
      <div style = {{ background : 'cyan', padding : 10 }} >
        {this.props.children}
      </div>
    )
  }
}

export default Toolbar;
