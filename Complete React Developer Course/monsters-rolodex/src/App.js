import { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};
	}

	/**
	 * Life Cycle Methods:
	 */

	componentDidMount() {
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
