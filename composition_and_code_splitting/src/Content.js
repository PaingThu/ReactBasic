import React from 'react';
//importing Css Module
import './Content.css';


class Content extends React.Component {
  render() {
    return (
      <div className = "content">
        {this.props.children}
      </div>
    );
  }
}

export default Content;
