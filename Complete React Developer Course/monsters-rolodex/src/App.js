import { useState } from "react";
import "./App.css";

// Components
import CardList from "./components/card-list/card-list.component";
import Searchbox from "./components/search-box/search-box.component";

const App = () => {
	const [searchField, setSearchField] = useState(""); //[value, setValue]

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

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
};

class App1 extends Component {
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

	render() {
		const { monsters, searchString } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name
				.toLowerCase()
				.includes(searchString.toLowerCase());
		});
	}
}

export default App;
