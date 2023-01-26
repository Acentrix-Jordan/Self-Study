import { Component } from "react";
import "./App.css";

/**
 * Search Feature Functionality
 *
 * Spec:
 *
 * Input Field to filter monsters
 *
 * Notes:
 * - We don't want to modify the state.
 */

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchString: "",
		};

		console.log("constructor");
	}

	componentDidMount() {
		console.log("componentDidMount");
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				this.setState(() => {
					return { monsters: users };
				});
			});
	}

	onSearchChange = (event) => {
		const searchString = event.target.value;

		this.setState(() => {
			/**
			 * If we only pass 1 value to a JS object, it will set both the key
			 * and value to the value passed
			 */
			return { searchString };
		});
	};

	render() {
		/**
		 * With ES6 we can destructure our values to
		 * remove having to call this. everywhere
		 */
		const { monsters, searchString } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name
				.toLowerCase()
				.includes(searchString.toLowerCase());
		});

		return (
			<div className="App">
				<input
					className="searchbox"
					type="search"
					placeholder="Search Monsters"
					/**
					 * OnChange orginally uses an annoymous function.
					 *
					 * Annoymous functions arn't stored in memory so each time it
					 * is called we have to reinitalise the function
					 *
					 * This can affect apps on a large scale.
					 *
					 * To better optomise our code we move outside into
					 * our component as a method
					 */
					onChange={onSearchChange}
				/>
				{filteredMonsters.map((monster) => {
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
