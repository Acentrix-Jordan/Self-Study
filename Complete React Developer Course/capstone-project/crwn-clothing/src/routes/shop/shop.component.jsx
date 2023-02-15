import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import "./shop.style.scss";

const Shop = () => {
	const { products } = useContext(ProductsContext);

	return (
		<div>
			<h1>Shop Page</h1>
			{products.map(({ id, name }) => {
				return (
					<div key={id}>
						<h2>{name}</h2>
					</div>
				);
			})}
		</div>
	);
};

export default Shop;
