import "./product-card.style.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className="product-card-container">
			<img
				src={imageUrl}
				alt={`Picture of ${name}`}
			/>
			<div className="product-card-footer">
				<span className="product-card-name">{name}</span>
				<span className="product-card-price">{price}</span>
			</div>
			<Button
				buttonType="inverted"
				content="Add to Cart"
				onClick={addProductToCart}
			/>
		</div>
	);
};

export default ProductCard;
