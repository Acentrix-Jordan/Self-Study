import "./search-box.styles.css";

const Searchbox = ({ className, placeholder, onChangeHandler }) => {
	return (
		<input
			type="search"
			className={`search-box ${className}`}
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default Searchbox;
