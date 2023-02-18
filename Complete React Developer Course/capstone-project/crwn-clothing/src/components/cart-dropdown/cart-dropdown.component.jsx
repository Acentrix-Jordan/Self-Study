import "./cart-dropdown.style.scss";
import { useNavigate } from "react-router-dom";

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

// Components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-dropdown-cart-items">
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						cartItem={item}
					/>
				))}
			</div>
			<Button
				content="GO TO CHECKOUT"
				onClick={goToCheckoutHandler}
			/>
		</div>
	);
};

export default CartDropdown;
