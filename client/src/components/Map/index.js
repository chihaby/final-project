import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./style.css";
import { Container } from '../Grid';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  state = {
    info: [],
    destination: ""
  };

  static defaultProps = {
    center: {
      lat: 37.871853,
      lng: -122.258423
    },
    zoom: 11
  };

  // need to create a fetchData function 

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event);
    this.fetchData();

  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <Container>

          <div style={{ height: '30vh', width: '100%'}}>
              <form>
                <div>
                  <label>Current Location</label>
                  <input className="form-control" placeholder="Enter current location"/>
                </div>
                <br />
                <div>
                  <label>Destination</label>
                  <input className="form-control" placeholder="Enter destination"/>
                </div>
                <br />
                  <button className="btn btn-primary" type="submit">Submit</button>
              </form>
            </div>
            
          <div className= "gmap mx-auto"  style={{ height: '100vh', width: '100%', border: "solid black" }} >
      
      
        
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

      </Container>
      
    );
  }
}
export default SimpleMap;