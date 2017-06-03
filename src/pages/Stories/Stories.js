import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Story from '../Story/Story';

const Stories = () => {

  return (
    <div className="stories">
      <h1> stories</h1>
      <ul className="stories__linked-list">
        <li className="stories__linked-item"><Link to="/stories/1" className="stories__link">Local Cat Finally Catches Red Dot</Link></li>
        <li className="stories__linked-item"><Link to="/stories/2" className="stories__link">WindowSill: Newest Hot Spot to Nap In the City</Link></li>
        <li className="stories__linked-item"><Link to="/stories/3" className="stories__link">Kittens raise 12 dead mice for hairball awareness</Link></li>
      </ul>

      <Switch>
        <Route path='/stories/:number' component={Story} />
      </Switch>
    </div>
  );
}

export default Stories;