import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * Below is an example of a class component which is the old React Syntax
 */
class App extends Component {
	// Below holds our state
	constructor() {
		// Super calls contructor on the class Component
		super();

		// State is an object that contains key value pairs
		this.state = {
			name: { firstName: "Jordan", lastName: "Wilson" },
			company: "Acentrix",
		};
	}

	// We explictly tell it to render the below
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img
						src={logo}
						className="App-logo"
						alt="logo"
					/>
					{/* We call state using this.state.`key` */}
					<p>
						Hi {this.state.name.firstName}{" "}
						{this.state.name.lastName}, I work at{" "}
						{this.state.company}
					</p>
					<button
						onClick={() => {
							/**
							 * State only updates when the memory changes
							 * so to do this, the object is shallow merged.
							 *
							 * Set state happens Asynchroously, so the console.log
							 * will fire before the state is updated
							 *
							 * With the Example below we are passing an object
							 * to update the state, so this happens asychronously
							 *
							 * 	this.setState({
							 *      name: { firstName: "Joe", lastName: "Blogs" },
							 *  });
							 *
							 * Another way to do this is to pass a function and a callback function
							 *
							 * This results in a more consistent output
							 * */
							this.setState(
								/**
								 * First function is an updater function
								 * This returns an object it will shallow merge against state
								 * In the first function we have access to state and props
								 * */
								(state, props) => {
									return {
										name: {
											firstName: "Joe",
											lastName: "Blogs",
										},
									};
								},
								/**
								 * This callback is called once the orginal function has finihsed
								 * So for more consistent results we can add our console.log here
								 */
								() => {
									console.log(this.state);
								}
								/**
								 * This is the preferred setup for class components
								 *
								 * Note: the callback is optional and not required
								 */
							);
						}}
					>
						Change Name
					</button>
				</header>
			</div>
		);
	}
}

export default App;
