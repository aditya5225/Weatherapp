
import React, { useRef, useEffect } from 'react';
import './../SCSS/Left_box.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Get_weather_data, Add_city, current_location } from '../Redux/Actions/action';


const Left_box = () => {

	const location = useSelector(state => state.current_location.location)
	const city = useSelector(state => state.city);

	const dispatch = useDispatch();

	const Input_city = useRef(null);

	const cityHandleKeyPress = (e) => {
		if (e.charCode == 13) {
			dispatch(Add_city(Input_city.current.value))
			Input_city.current.value = '';
		}
	}

	const getCity = () => {
		dispatch(Add_city(Input_city.current.value))
		Input_city.current.value = '';
	}

	useEffect(async () => {
		if (city == 'local') {
			await dispatch(current_location());
			console.log(location);

			const result = await dispatch(Add_city(location));
			await dispatch(Get_weather_data(location));

		} else {
			await dispatch(Get_weather_data(city));
			console.log('lol')
		}
	}, [city, location])


	return (
		<div className='left_card'>
			<div>
				<h1> Weather App </h1>
				<input ref={Input_city} onKeyPress={cityHandleKeyPress} type='text' placeholder='Enter City Name' />
				<button onClick={getCity}> GET WEATHER </button>
			</div>
		</div>
	)
}


export default Left_box;