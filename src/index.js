import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

class userInput extends React.Component {
	render() {
		return (

			<form>
				<h1>Photo Gallery by Alima M.</h1>
				<input type="text" value="Enter your URL here"/>
			</form>
		);
	}
}

ReactDOM.render(<userInput />, document.getElementById('root'));