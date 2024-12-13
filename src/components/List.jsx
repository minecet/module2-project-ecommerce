import productsData from "../assets/products.json";
import React, { useState } from "react";
import ListItem from "./ListItem.jsx";

function List(){

    const [products, setProducts] = useState(productsData)
    // Delete item handler
    const deleteItem = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      };

    return (

        <div className="body">
            {products.map(eachProduct => (
                <ListItem
                    key={eachProduct.id}
                    product={eachProduct}
                    deleteItem={deleteItem} // Pass delete handler
                />
            ))}
        </div>)
}


export default List;
