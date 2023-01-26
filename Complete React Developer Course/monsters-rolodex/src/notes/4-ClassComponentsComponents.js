import { Component } from "react";
import "./App.css";

/**
 * Class Components - Components
 *
 * Components govern pieces of UI
 *
 * With components we can break down and modulise our code
 *
 * We want components to be as general as possible
 * so we can utilise and reuse components
 *
 * We typically store our components in folder named components
 *
 * In this lecture we created this folder we created the components folder.
 *
 * We then created our card-list and search-box folder
 *
 * Each component has its own folder inside of our components folder
 */

import CardList from "./components/card-list/card-list.component";
import Searchbox from "./components/search-box/search-box.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchString: "",
		};
	}

	componentDidMount() {
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
			return { searchString };
		});
	};

	render() {
		const { monsters, searchString } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name
				.toLowerCase()
				.includes(searchString.toLowerCase());
		});

		return (
			<div className="App">
				<Searchbox
					onChangeHandler={onSearchChange}
					placeholder="Search Monsters"
					className="search-box"
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
