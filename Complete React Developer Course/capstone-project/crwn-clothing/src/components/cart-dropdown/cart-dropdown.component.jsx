import Button from "../button/button.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-dropdown-cart-items"></div>
			<Button content="GO TO CHECKOUT" />
		</div>
	);
};

export default CartDropdown;
