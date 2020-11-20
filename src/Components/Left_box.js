
import React, {useRef} from 'react';
import './../SCSS/Left_box.scss';
import {useSelector, useDispatch} from 'react-redux';
import {Add_city} from '../Redux/Actions/action';


const Left_box = () => {

	const city= useSelector(state => state.city);
	const dispatch= useDispatch();

	const Input_city= useRef(null);

	const cityHandleKeyPress = (e) => {
		if(e.charCode == 13)
		{
			dispatch(Add_city(Input_city.current.value))
			Input_city.current.value= '';
		}
	}

	const getCity = () => {
		dispatch(Add_city(Input_city.current.value))
		Input_city.current.value= '';
	}

	// console.log(city);


	return (
		<div className= 'left_card'>
			<div>
				<h1> Weather App </h1>
				<input ref= {Input_city} onKeyPress= {cityHandleKeyPress} type= 'text' placeholder= 'Enter City Name' /> 
				<button onClick= {getCity}> GET WEATHER </button>
			</div>
		</div>
		)
}


export default Left_box;