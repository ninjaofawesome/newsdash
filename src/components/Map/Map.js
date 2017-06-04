/*global google*/
import React, { Component } from 'react'

/*

adapted from this:  https://www.codementor.io/thomastuts/integrate-google-maps-api-react-refs-du10842zd.  Only needed a basic map, watch video and use codepen provided.

for reference:
-remove async default from google api script in index.html
-linter will bark on google, check out: http://eslint.org/docs/rules/no-undef

*/

const CENTRAL_PARK_POSITION = {
  lat: 40.782865,
  lng: -73.965355
};

class Map extends Component {

  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      center: CENTRAL_PARK_POSITION,
      zoom: 12
    });
  }

  render() {
    return (
      <div className="map">
        <h2 className="map__title">Bird Tracker</h2>
        <div ref="map" className="map__container" />
      </div>
    );
  }
}

export default Map;