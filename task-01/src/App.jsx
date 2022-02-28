import React from "react";
import "./style.css";
import user from "./userdata"

function App() {
	return <div className="App">
		<div>{user[0].name}</div>
		<div>{user[0].location}</div>
		<div>{user[0].foodType}</div>
		<div>{user[0].age}</div>
		<div>{user[0].likes}</div>
		<div><a href="https://twitter.com/chrisoncode" target="_blank"> go to {user[0].twitterUsername} twitter profile </a></div>
		<img src={user[0].avatar}/>
	</div>;
	
}

export default App;
