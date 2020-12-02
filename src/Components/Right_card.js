
import React from 'react';
import './../SCSS/Right_card.scss';
import { useSelector } from 'react-redux';


const Right_card = () => {

	const weatherIcon = {
		Smoke: 'fad fa-smoke',
		Rain: 'fas fa-cloud-rain',
		Clear: "fas fa-cloud-sun",
		Haze: "fas fa-sun-haze",
		Clouds: "fas fa-clouds",
		Mist: "fas fa-fog"
	}

	const weather = useSelector(state => state.weather);

	// console.log(weather.weather_type);


	return (
		<div className='right_card'>
			<div>
				<i className={weatherIcon[weather.weather_type]}></i>
				<h1> <span> {weather.city} </span> / <span> {weather.country} </span> </h1>
				<p> <span> {weather.day} </span> / <span> {weather.date} </span> / <span> {weather.time} </span> </p>
				<h2> {weather.temp} <span> &#8451; </span> </h2>
				<p> <span> Min: {weather.min_temp} </span> / <span> Min: {weather.max_temp} </span> </p>
			</div>

			<div className='one'></div>
			<div className='two'></div>
			<div className='three'></div>
			<div className='four'></div>
		</div>
	)
}


export default Right_card;