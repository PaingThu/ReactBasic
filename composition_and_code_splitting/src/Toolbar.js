import React from 'react';

//Toolbar Component
// Css in JS - Two Ways
class Toolbar extends React.Component {
  // 1st way
  // render() {
  //   let parent = 200;
  //   let height = 150;
  //   return (
  //     <div style = {{ background : 'cyan', padding : 10 , marginBottom: parent - height,
  //     border: '1px solid red' }} >
  //       {this.props.children}
  //     </div>
  //   );
  // }

  // 2nd way ( this way is better)
  render() {
    const styles = {
      toolbar: {
        marginBottom: 20,
        border : '1px solid red'
      },
      dark: {
        background: 'purple',
        color: 'white'
      }
    }
    return (
      <div style = {styles.toolbar, styles.dark} >
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;
