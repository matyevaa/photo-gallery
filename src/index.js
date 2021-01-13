import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


class UserInput extends React.Component {
	const [show, hide] = useState(false);
	const myForm = () => show(true);
		return (

			<form id="myForm">
				<h1>Photo Gallery by Alima M.</h1>
				<input type="text" placeholder="Enter your URL here"/>
				</br>
				<input type="text" placeholder="Enter your caption here"/>
				</br>
				<button onClick={myForm}>Accept</button>
				</br>
				<button>Cancel</button>
			</form>
		);
}

const myRoot = document.getElementById('root');
ReactDOM.render(<UserInput />, myRoot);