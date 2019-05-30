import React, { Component } from 'react';
import Map from './index'
import './style.css'
class Home extends Component {

	render() {
		return(
			//wrote an inline style that probably should be done somewhere else
			<div style={{ height: '300px', width: '50%', margin: '50px'}}>
				<Map
     			google={this.props.google}
     			center={{lat: 37.871853, lng: -122.258423}}
     			height='300px'
     			zoom={15}
    			/>
			</div>
		);
	}
}

export default Home;