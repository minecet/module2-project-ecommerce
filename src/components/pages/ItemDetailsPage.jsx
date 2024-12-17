import React from "react";

function ItemDetailsPage({ product }) {
  if (!product) {
    return <h2>No product details available. Please select a product.</h2>;
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Item Details</h2>
      <h3>{product.title}</h3>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <img src={product.thumbnail} alt="Item Thumbnail" style={{ width: "300px" }} />
    </div>
  );
}

export default ItemDetailsPage;
