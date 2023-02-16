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
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
