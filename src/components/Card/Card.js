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
      video,
      main
    } = this.props;

    if (main) {
      return (
        <div className={`${className}__main-card-wrapper` }>
          <Link to={`/stories/${video}`} className={`${className}__page-link`}>
            <img className={`${className}__main-image`} src={image} alt={title} />
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
            <img className={`${className}__image`} src={image} alt={title} />
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