import React, { useState } from "react";
function ListItem({ product, deleteItem }){
    //const [eachItem, setItem] = useState(props)

    const handleStockLimit = (stock) => {
        if (stock <= 15){
            return (<label htmlFor="outofStockWarning" style={{ backgroundColor: "red" }}><strong>Almost out of stock</strong> </label>);
        }
        return null; // Return nothing if stock is sufficient

    }

    return (
        <div key= {product.id}>
            
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={`Thumbnail of ${product.title}`} style={{ width: "50px" }} />
            <p>{product.description}</p>
            <p>
            <strong> Cost:</strong> ${product.price}
            </p>
            <div>                    
                {handleStockLimit(product.stock)}
                <button onClick={() => deleteItem(product.id)}>Delete</button>
            </div>
        
        </div>)
}


export default ListItem;
