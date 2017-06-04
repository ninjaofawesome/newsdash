import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Story from '../../pages/Story/Story';

class Card extends Component {
  render() {
    const {
      className,
      title,
      image,
      author,
      video,
      main
    } = this.props;

    return (
      <div className={main ? `${className}--main` : className }>
          <Link to={`/stories/${video}`} className={`${className}--pagelink`}>
            <img className={`${className}--image`} src={image} alt={title} />
            <div className={`${className}--title`}>{title}</div>
            <div className={`${className}--author`}>{author}</div>
          </Link>
        <Switch>
          <Route path="/stories/:number" component={Story} />
        </Switch>
      </div>
    );
  }
}

export default Card;