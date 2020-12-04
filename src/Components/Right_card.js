
import React from 'react';
import './../SCSS/Right_card.scss';
import { useSelector } from 'react-redux';
import Skeleton from 'react-skeleton-loader';




const Right_card = () => {

	const weatherIcon = {
		Smoke: 'fad fa-smoke',
		Rain: 'fas fa-cloud-rain',
		Clear: "fas fa-cloud-sun",
		Haze: "fas fa-sun-haze",
		Clouds: "fas fa-clouds",
		Mist: "fas fa-fog",
		Fog: "fad fa-fog"
	}

	const weather = useSelector(state => state.weather);

	console.log(weather.weather_type);


	return (
		<div className='right_card'>
			<div>
				<div className='fontawsome'>
					<i className={weatherIcon[weather.weather_type]}></i>
				</div>
				<div className='weather_body'>
					<h1> <span> {weather.city || <Skeleton height={30} />} </span> / <span> {weather.country || <Skeleton height={30} />} </span> </h1>
					<p> <span> {weather.day || <Skeleton height={10} />} </span> / <span> {weather.date || <Skeleton height={10} />} </span> / <span> {weather.time || <Skeleton height={10} />} </span> </p>
					<h2> {weather.temp || <Skeleton height={20} />} <span> &#8451; </span> </h2>
					<p> <span> Min: {weather.min_temp || <Skeleton height={10} />} </span> / <span> Min: {weather.max_temp || <Skeleton height={10} />} </span> </p>
				</div>
			</div>

			<div className='one'></div>
			<div className='two'></div>
			<div className='three'></div>
			<div className='four'></div>
		</div>
	)
}


export default Right_card;