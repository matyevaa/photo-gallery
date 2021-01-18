import './index.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'reactstrap';


function UserForm(props) {
	const [data, setData] = useState([
	{
		url: "https://64.media.tumblr.com/08c59284615a3f6607441264d21d844f/tumblr_os9zbb8ADh1u20wb7o1_1280.jpg",
		caption: 'W Korea'
	},
	{
		url: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/12/04/91706e5a-33a1-11eb-8d89-a7d6b31c4b8a_image_hires_140229.jpg?itok=i144DGOg&v=1607061756",
		caption: 'Chanel Ready-to-Wear'
	},
	{
		url: "https://townsquare.media/site/252/files/2017/03/g-dragon-2017.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
		caption: 'Chanel Fashion Show'
	},
	{
		url: "https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/08/17/e1af5b16-a1d5-11e8-90bf-ccc49f9b020a_image_hires_172902.jpg?itok=2fMKf7fn&v=1534498130",
		caption: 'Vogue Korea'
	},
	{
		url: "https://cutewallpaper.org/21/g-dragon-pics/K-pop-star-G-Dragon-in-spotlight-over-VIP-treatment-in-.jpg",
		caption: 'Ambush X PMO'
	},
	{
		url: "http://www.bigbangmusic.info/images/bbu/2016-11/faf794402b.jpeg",
		caption: 'Vidal Sassoon China'
	},

	]);
	
	const [newImageUrl, setNewImageUrl] = useState("");
	const [newCap, setNewCap] = useState("");

	const handleChange = (event) => { 
		setNewImageUrl(event.target.value);
	}

	const handleAdd = (event) => { 
		event.preventDefault();

		if(newImageUrl == "" || newCap == "") {
			alert("You must enter both a URL and a caption.")
			return null;
		}

		var newData = {url: newImageUrl, caption: newCap};
		setData([newData, ...data]);
		setNewImageUrl("");
		setNewCap("");
	}

	const handleChangeCap = (event) => {
		setNewCap(event.target.value);
	}

	if(props.form) {
		return (
			<div>
				<center>
					<form id="myForm">
						<h1>Photo Gallery by Alima M.</h1>
						<div id="inputDiv">
							<input type="text" value={newImageUrl} onChange={handleChange} placeholder="Enter your URL here" />
							<input type="text" value={newCap} onChange={handleChangeCap} placeholder="Enter your caption here"/>
						</div>
						<button type="submit" onClick={handleAdd}  id="formBtn" class="btnClass">Accept</button>
						<button id="formBtn" onClick={props.passClickMe} class="btnClass"> Cancel</button>
					</form>
				</center>
				<center>
					<div class="images">
						 {data.map((image) => {
								return (
									<div>
										<img src={image.url} id="images" alt=""/>
										<p id="captions">{image.caption}</p>
									</div>
								);
							})
						}
					</div>
				</center>
			</div>
		);
	}

	return null;
}


class UserInput extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			revealForm: true, 
		};

		this.clickMe = this.clickMe.bind(this);

	}	

	clickMe() {
		this.setState(state => ({ revealForm: !state.revealForm}));
	}

	render() {

		return ( 
			<div>
				<button id="release" class="btnClass" onClick={this.clickMe}>{this.state.revealForm ? 'Close photo entry dialog' : 'Open photo entry dialog'}</button>
				<UserForm form={this.state.revealForm} passClickMe={this.clickMe} />
			</div>
		);
	}
}


ReactDOM.render(<UserInput />, document.getElementById('root')); 