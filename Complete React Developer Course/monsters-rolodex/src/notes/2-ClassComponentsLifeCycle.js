import { Component } from "react";
import "./App.css";

/**
 * Order
 * 1. Constructor is called
 * 2. Constructor initalises state
 * 3. Render is called
 * 4. Render dictates the UI of the component
 * 6. Mount inital UI to the DOM
 * 5. componentDidMount is called
 * 6. Rinse and Repeat 3 - 5 when state changes
 */

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};

		console.log("constructor");
	}

	/**
	 * Life Cycle Methods:
	 */

	componentDidMount() {
		console.log("componentDidMount");
		/**
		 * This is when the component is initally mounted to the app.
		 * Vue.js equivalent = onMounted()
		 *
		 * This is the best time to do an api request
		 */

		fetch("https://jsonplaceholder.typicode.com/users")
			/**
			 * Make a call to the above URl, convert response to json which
			 * returns a promise
			 */
			.then((response) => response.json())
			.then((users) => {
				this.setState(() => {
					return { monsters: users };
				});
			});
	}

	render() {
		console.log("render");
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					/**
					 * When we map we need to make sure the top level element has
					 * a key as react uses this to differentiate between elements
					 */
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
