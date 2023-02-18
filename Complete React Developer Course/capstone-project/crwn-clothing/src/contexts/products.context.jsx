import { useState, createContext, useEffect } from "react";
import SHOP_DATA from "../shopdata.js";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// Value we want to access
export const ProductsContext = createContext({
	products: [],
});

// Provider
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	addCollectionAndDocuments("categories", SHOP_DATA);
	// }, []);
	const value = { products };

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
