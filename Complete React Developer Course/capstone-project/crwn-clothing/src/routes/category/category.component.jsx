import { useParams, Link } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category.style.scss";
import ProductCard from "../../components/product-card/product-card.component";
import Button from "../../components/button/button.component";

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<div className="category-header-wrapper">
				<h2 className="category-title">{category.toUpperCase()}</h2>
				<Link to="/shop">
					<Button
						content="Back to shop"
						buttonType="inverted"
					/>
				</Link>
			</div>
			<div className="category-container">
				{products &&
					products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
			</div>
		</>
	);
};

export default Category;
