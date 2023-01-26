import { Component } from "react";

/**
 * Styles are applied across the whole app.
 *
 * The styles are not restricted to just the component file
 */
import "./search-box.styles.css";

class Searchbox extends Component {
	render() {
		return (
			<input
				type="search"
				className={`search-box ${this.props.className}`}
				placeholder={this.props.placeholder}
				onChange={this.props.onChangeHandler}
			/>
		);
	}
}

export default Searchbox;
