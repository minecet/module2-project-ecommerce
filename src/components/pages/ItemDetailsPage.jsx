import React, { useState } from "react";

function ItemDetailsPage({ product }) {
  const [images, setImages] = useState(product.images || []); //get images or create an empty array
  const [newImageUrl, setNewImageUrl] = useState("");
  if (!product) {
    return <h2>No product details available. Please select a product.</h2>;
  }

  const handleAddImage = () => {
    if (newImageUrl) {
      setImages([...images, newImageUrl]); // Add new image URL to the images array
      setNewImageUrl(""); // Clear input field
    }
  };
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Item Details</h2>
      <h3>{product.title}</h3>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <img src={product.thumbnail} alt="Item Thumbnail" style={{ width: "300px" }} />
      <h3>Product Images</h3>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            style={{ width: "150px", margin: "10px" }}
          />
        ))}
      </div>

      {/* Image upload section */}
      <div style={{ marginTop: "20px" }}>
        <h4>Add New Image</h4>
        <input
          type="url"
          placeholder="Enter image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>
    
    </div>
  );
}

export default ItemDetailsPage;
