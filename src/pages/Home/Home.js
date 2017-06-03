import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Post from '../../components/Post/Post';
import NewsStrip from '../../components/NewsStrip/NewsStrip';

class Home extends Component {
  render(){
    return(
      <div className="home">
        <Card />
        <Post />
        <NewsStrip />
      </div>
    );
  }
}

export default Home;