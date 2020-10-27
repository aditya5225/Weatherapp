
import React from 'react';
import './App.scss';
import Left_box from './Left_box';
import Right_card from './Right_card';


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