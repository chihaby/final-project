import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./style.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
 static defaultProps = {
   center: {
     lat: 59.95,
     lng: 30.33
   },
   zoom: 11
 };

 render() {
   return (
     // Important! Always set the container height explicitly
     <div  style={{ height: '100vh', width: '50%'}}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: "AIzaSyD9wlCcxU0_t4R2VfsyqXFnP4MkD2F44z0" }}
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
       >
         <AnyReactComponent
           lat={37.8715926}
           lng={-122.272747}
           text="My Marker"
         />
       </GoogleMapReact>
     </div>
   );
 }
}

export default SimpleMap;