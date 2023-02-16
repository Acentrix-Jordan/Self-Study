import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
	const { setIsCartOpen, isCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<div
			className="cart-icon-container"
			onClick={toggleIsCartOpen}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="cart-icon-item-count">10</span>
		</div>
	);
};

export default CartIcon;
