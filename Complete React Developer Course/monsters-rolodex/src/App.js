import { useState, useEffect } from "react";
import "./App.css";

// Components
import CardList from "./components/card-list/card-list.component";
import Searchbox from "./components/search-box/search-box.component";

const App = () => {
	const [searchField, setSearchField] = useState(""); //[value, setValue]
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	/**
	 * Use effect requires two parameters, the first is a callback function and
	 * the second is an array of dependencies.
	 *
	 * When a value in its dependencies changes, it will then fire the CB function
	 *
	 * For our fetch call, we only want our app to do the fetch when the components
	 * mounts, so we pass an empty array.
	 */
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(filteredMonsters);
	}, [monsters, searchField]);

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

export default App;
