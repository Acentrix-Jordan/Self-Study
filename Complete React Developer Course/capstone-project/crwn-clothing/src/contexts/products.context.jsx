import { useState, createContext, useEffect } from "react";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// Value we want to access
export const ProductsContext = createContext({
	products: [],
});

// Provider
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCollectionAndDocuments();

			console.log(categoryMap);
		};

		getCategoriesMap();
	}, []);

	const value = { products };

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
