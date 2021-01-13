import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

class UserInput extends React.Component {
	render() {
		return (

			<form id="myForm">
				<h1>Photo Gallery by Alima M.</h1>
				<input type="text" placeholder="Enter your URL here"/>
				<input type="text" placeholder="Enter your caption here"/>
				<button>Accept</button>
				<button>Cancel</button>
			</form>
		);
	}
}

ReactDOM.render(<UserInput />, document.getElementById('root'));