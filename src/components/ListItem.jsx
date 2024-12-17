import React, { useState } from "react";
import './ListItem.css';
import { Link } from "react-router-dom";


function ListItem({ product, deleteItem, editItem }){
    //const [eachItem, setItem] = useState(props)

    const handleStockLimit = (stock) => {
        if (stock <= 15){
            return (<label htmlFor="outofStockWarning" style={{ backgroundColor: "red" }}><strong>Almost out of stock</strong> </label>);
        }
        return null; // Return nothing if stock is sufficient

    }

    return (
        <div className="bodyListItem" >
            <ul>
            <li key= {product.id}>
            <Link to={`./details/${product.id}`}>

            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={`Thumbnail of ${product.title}`} style={{ width: "50px" }} />
            <p>{product.description}</p>
            <p> <strong> Cost:</strong> ${product.price} </p>

            
            
            </Link>
            </li>
            </ul>
            <div>                    
                {handleStockLimit(product.stock)}
                <button className="deleteButton" onClick={() => deleteItem(product.id)}>Delete</button>
                <button className="editButton"onClick={() => editItem(product)}>Edit</button> {/* Edit button */}
            </div>
        </div>
    )
}


export default ListItem;
