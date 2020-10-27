
import React from 'react';
import './Left_box.scss';


const Left_box = () => {
	return (
		<div className= 'left_card'>
			<div>
				<h1> Weather App </h1>
				<input type= 'text' placeholder= 'Enter City Name' /> 
				<button> GET WEATHER </button>
			</div>
		</div>
		)
}


export default Left_box;