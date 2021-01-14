import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


class UserInput extends React.Component {

	return (
			<p>Click Me</p>
			<form id="myForm">
				<h1>Photo Gallery by Alima M.<\h1>
				<input type="text" placeholder="Enter your URL here"/><br>
				<input type="text" placeholder="Enter your caption here"/><br>
				<button>Accept</button><br>
				<button>Cancel</button>
			</form>
	);
}

const myRoot = document.getElementById('root');
ReactDOM.render(
	<UserInput />, 
	myRoot
);