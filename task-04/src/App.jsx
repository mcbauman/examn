import React, { useState } from "react";
import "./style.css";

function App() {
	const [transformationPoints,setTransformationPoints]=useState(0)
	function moveUp(){
		setTransformationPoints(transformationPoints+10)
		console.log(transformationPoints);
	}
	return <div className="App">
		<button onClick={moveUp}>👆 Move Up 👆</button>
		<div style={translateY(`${transformationPoints} px`)}className="box"></div>
	</div>;
}

export default App;
