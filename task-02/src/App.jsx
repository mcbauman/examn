import React from "react";

const people = [
	{
		name: "chris",
		pets: [
			{ name: "bella", type: "dog" },
			{ name: "cocoa", type: "dog" },
		],
	},

	{
		name: "nick",
		pets: [
			{ name: "hilo", type: "cat" },
			{ name: "polly", type: "cat" },
		],
	},
];


function App() {
	return (<div className="App"
	>
		<ul>
			{people[0].map(item=>{return item})}
		</ul>
	</div>)
}

export default App;
