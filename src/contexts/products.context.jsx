import { createContext, useState } from "react";

import PRODUCTS from '../chocolate-data.json'


export const ProductsContext = createContext({
    PRODUCTS: []
})

export const ProductsProvider = ({ children }) => {


    const [products] = useState(PRODUCTS);
    const value = { products };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )


}