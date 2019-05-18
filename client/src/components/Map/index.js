import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./style.css";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.871853,
      lng: -122.258423
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className= "gmap" style={{ height: '100vh', width: '50%', border: "solid black" }} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD9wlCcxU0_t4R2VfsyqXFnP4MkD2F44z0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.871853}
            lng={-122.258423}
            text="My Marker"
          />
        </GoogleMapReact>
      </ div>
    );
  }
}
export default SimpleMap;