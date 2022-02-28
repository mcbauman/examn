import React, { useState } from "react";
import "./style.css";



function App() {
	const [text,setText]=useState("")
	const [age,setAge]=useState("")

	function handleChange(e){
		setText(e.target.value)
	}
	function handleChange2(e){
		setAge(e.target.value)
	}

return <div className="App">
		<p>Dispay Name: {text}</p>
		<p>Display Age: {age}</p>
		<form action="">
			<input type="text" value={text}onChange={handleChange}/>
			<input type="number" value={age}onChange={handleChange2}/>
		</form>
	</div>;
}

export default App;
