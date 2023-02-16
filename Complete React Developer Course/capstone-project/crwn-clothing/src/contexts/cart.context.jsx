import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
	// Find if cartItems contains productToAdd
	const exisitingCartItem = cartItems.find((cartItem) => {
		return cartItem.id === productToAdd.id;
	});

	// If Found, increment quantity
	if (exisitingCartItem) {
		return cartItems.map((cartItem) => {
			return cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem;
		});
	}
	// Return new array with modified cartItems / new cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	totalCartItems: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalCartItems, setTotalCartItems] = useState(0);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	useEffect(() => {
		const calculateTotalCartItems = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);

		setTotalCartItems(calculateTotalCartItems);
	}, [cartItems]);

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		totalCartItems,
	};
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
