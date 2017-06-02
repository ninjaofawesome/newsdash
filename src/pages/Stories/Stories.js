import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Story from '../Story/Story';

const Stories = () => {
  return (
    <div className="stories">
      <h1>Stories</h1>
      <ul className="stories__route-list">
        <li><Link to='/stories/story'>Story 1</Link></li>
      </ul>

      <Route path='stories/story' component={Story} />
    </div>
  );
}

export default Stories;