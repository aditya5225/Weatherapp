
import React from 'react';
import './SCSS/App.scss';
import Left_box from './Components/Left_box';
import Right_card from './Components/Right_card';


const App = () => {
	return (
		<div className= 'app container'>
			<div className= 'row'>
				<div className= 'col-sm-12 col-md-12 col-lg-5 col-xl-5 left_box'>
					<Left_box />
				</div>

				<div className= 'col-sm-12 col-md-12 col-lg-7 col-xl-7 Right_box'>
					<Right_card />
				</div>
			</div>
		</div>
		)
}


export default App;