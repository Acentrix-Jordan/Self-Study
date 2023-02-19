import "./category-directory.style.scss";

import CategoryDirectoryItem from "../category-item/category-directory-item.component";

const CategoryDirectory = ({ categories }) => {
	return (
		<div className="category-directory-container">
			{categories.map((category) => (
				<CategoryDirectoryItem
					key={category.id}
					category={category}
				/>
			))}
		</div>
	);
};

export default CategoryDirectory;
