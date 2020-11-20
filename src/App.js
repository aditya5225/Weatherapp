
import React from 'react';
import './SCSS/App.scss';
import Left_box from './Components/Left_box';
import Right_card from './Components/Right_card';


const App = () => {
	return (
		<div className= 'app container-fluid'>
			<div className= 'row'>
				<div className= 'col-5 left_box'>
					<Left_box />
				</div>

				<div className= 'col-7 Right_box'>
					<Right_card />
				</div>
			</div>
		</div>
		)
}


export default App;