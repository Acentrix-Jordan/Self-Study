import { useState, createContext, useEffect } from "react";
import PRODUCTS from "../shopdata.json";

// Value we want to access
export const ProductsContext = createContext({
	products: [],
});

// Provider
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = { products };

	// useEffect(() => {}, []);

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
