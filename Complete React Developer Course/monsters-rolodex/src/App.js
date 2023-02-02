import { Component } from "react";
import "./App.css";

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
				<h1 className="app-title">Monsters Rolodex</h1>
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
