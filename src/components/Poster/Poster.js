import React, { Component } from 'react';

class Poster extends Component {
  render(){
    return <img className={this.props.className} src={this.props.image} alt={this.props.title} />;
  }
}

export default Poster;