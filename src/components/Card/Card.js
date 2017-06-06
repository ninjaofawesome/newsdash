import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Story from '../../pages/Story/Story';
import Poster from '../Poster/Poster';

class Card extends Component {
  render() {
    const {
      className,
      title,
      image,
      video,
      main,
      story
    } = this.props;

    if (story) {
      return (
        <div className={`${className}__story-card-wrapper` }>
          <h2 className={`${className}__title`}>{title}</h2>
          <Poster
            className={`${className}__image`}
            image={image}
            title={title}
          />
        </div>
      );
    }

    if (main) {
      return (
        <div className={`${className}__main-card-wrapper` }>
          <Link to={`/stories/${video}`} className={`${className}__page-link`}>
            <Poster
              className={`${className}__main-image`}
              image={image}
              title={title}
            />
            <div className={`${className}__main-title`}>{title}</div>
          </Link>
          <Switch>
            <Route path="/stories/:number" component={Story} />
          </Switch>
        </div>
      );
    }

    return (
      <div className={`${className}__card-wrapper`}>
        <Link to={`/stories/${video}`} className={`${className}__page-link`}>
          <div className={`${className}__image-wrapper`}>
            <Poster
              className={`${className}__image`}
              image={image}
              title={title}
            />
          </div>
          <div className={`${className}__text-wrapper`}>
            <div className={`${className}__title`}>{title}</div>
          </div>
        </Link>
        <Switch>
          <Route path="/stories/:number" component={Story} />
        </Switch>
      </div>
    );
  }
}

export default Card;