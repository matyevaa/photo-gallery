import './index.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/*
	"https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/08/18/f4a6d89c-d2e9-11ea-88dd-6bec610be4a6_image_hires_231848.jpg?itok=7I3BdzZ1&v=1597763933",
	"https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/12/04/91706e5a-33a1-11eb-8d89-a7d6b31c4b8a_image_hires_140229.jpg?itok=i144DGOg&v=1607061756",
	"https://townsquare.media/site/252/files/2017/03/g-dragon-2017.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
	"https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/08/17/e1af5b16-a1d5-11e8-90bf-ccc49f9b020a_image_hires_172902.jpg?itok=2fMKf7fn&v=1534498130",
	"https://i.pinimg.com/originals/73/21/bb/7321bbfe3e078309e8a9a4724ade6b5b.jpg",
	"http://www.bigbangmusic.info/images/bbu/2016-11/faf794402b.jpeg",
*/	

function UserForm(props) {
	const [data, setData] = useState([
	{
		id: 1,
		url: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/08/18/f4a6d89c-d2e9-11ea-88dd-6bec610be4a6_image_hires_231848.jpg?itok=7I3BdzZ1&v=1597763933",
		caption: 'caption #1'
	},
	{
		id: 2,
		url: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/12/04/91706e5a-33a1-11eb-8d89-a7d6b31c4b8a_image_hires_140229.jpg?itok=i144DGOg&v=1607061756",
		caption: 'caption #2'
	},
	{
		id: 3,
		url: "https://townsquare.media/site/252/files/2017/03/g-dragon-2017.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
		caption: 'caption #3'
	},

	]);
	
	const [newImageUrl, setNewImageUrl] = useState("");
	const [newCap, setNewCap] = useState("");

	const handleChange = (event) => { 
		setNewImageUrl(event.target.value);
	}

	const handleAdd = (event) => { 
		event.preventDefault();

	//	setImages([newImageUrl, ...images]);
	//	setNewImageUrl("");

	//	setCap([newCap, ...caps]);
	//	setNewCap("");

		var newData = {url: newImageUrl, caption: newCap};
		setData([...data, newData]);
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
						<button type="submit" onClick={handleAdd} id="formBtn" class="btnClass">Accept</button>
						<button id="formBtn" onClick={props.passClickMe} class="btnClass"> Cancel</button>
					</form>
				</center>
				<center>
					<div class="images">
						 {data.map((image, index) => {
								return (
									<div key={index}>
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