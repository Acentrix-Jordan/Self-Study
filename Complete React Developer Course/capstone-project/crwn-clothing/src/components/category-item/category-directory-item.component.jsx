import "./category-directory-item.style.scss";

const CategoryDirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;

	return (
		<div className="category-directory-item-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="category-directory-item-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryDirectoryItem;
