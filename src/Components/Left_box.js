
import React, { useRef, useEffect } from 'react';
import './../SCSS/Left_box.scss';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Get_weather_data, Add_city } from '../Redux/Actions/action';


const Left_box = () => {

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


	useEffect(() => {

		Input_city.current.focus();

		if (city == 'local') {

			const showLocation = async position => {
				try {
					const res = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=143c1d8dda3fbf06c2b57f70f5bf87aa`)
					let local = res.data.name;
					dispatch(Add_city(local));
				} catch (err) {
					console.log(err);
				}
			}

			const errorHandler = (err) => {
				if (err.code == 1) {
					alert("Error: Please Allow location access or Enter a city name!!");
				} else if (err.code == 2) {
					alert("Error: Position is unavailable!");
				}
			}

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
			} else {
				alert("Sorry, browser does not support geolocation!");
			}
		}
		else {
			dispatch(Get_weather_data(city));
		}

	}, [city])



	return (
		<div className='left_card'>
			<div>
				<h1> Weather App </h1>
				<input ref={Input_city} onKeyPress={cityHandleKeyPress} type='text' placeholder='Enter City Name' /> <br />
				<button onClick={getCity}> GET WEATHER </button>
			</div>
		</div>
	)
}


export default Left_box;