import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = () => {
	return (
		<div className="cart-icon-container">
			<ShoppingIcon className="shopping-icon" />
			<span className="cart-icon-item-count">10</span>
		</div>
	);
};

export default CartIcon;
