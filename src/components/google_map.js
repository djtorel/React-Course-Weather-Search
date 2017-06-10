import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    new window.google.maps.Marker({
      position: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      map: map
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;