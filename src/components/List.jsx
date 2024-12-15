import productsData from "../assets/products.json";
import React, { useState } from "react";
import ListItem from "./ListItem.jsx";

function List(){
    const [products, setProducts] = useState(productsData)
    const [id, setid] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [discountPercentage, setdiscountPercentage] = useState('')
    const [rating, setRating] = useState('')
    const [stock, setStock] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [images, setImages] = useState([])
    const [editProductId, setEditProductId] = useState(null); // Track which product to edit

    const handleSubmit = event => {
      event.preventDefault()
      // Create a new student object
      const newProduct = {
        id: editProductId || products.length + 1, // Use existing ID if editing
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images
      };


      // tracking the add new or edit with the state of editProductId being null or not
      if (editProductId) {
        // Update existing product
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === editProductId ? newProduct : product
          )
        );
        setEditProductId(null); // Clear edit mode
      } else {
        // Add new product
        setProducts((prevProducts) => [...prevProducts, newProduct]);
      }



      // Clear the form inputs
      setid('');
      setTitle('');
      setDescription('');
      setPrice('');
      setdiscountPercentage('');
      setRating('');
      setStock('');
      setBrand('');
      setCategory('');
      setThumbnail('');
      setImages([]);
    }





    // Delete item handler
    const deleteItem = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      };
      // Handle product edit
  const editItem = (product) => {
    setEditProductId(product.id); // Set the ID of the product being edited
    setid(product.id);
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price);
    setdiscountPercentage(product.discountPercentage);
    setRating(product.rating);
    setStock(product.stock);
    setBrand(product.brand);
    setCategory(product.category);
    setThumbnail(product.thumbnail);
    setImages(product.images);
  };

    return (

        <div className="body">
            <form onSubmit={handleSubmit}>
            <span>Add a product</span>
            <div>
            <label>
                Title
                <input 
                name="title" 
                type="text" 
                value={title}
                placeholder="Title" 
                onChange={event => setTitle(event.target.value)}
                />
            </label>

            <label>
                Description
                <input 
                name="description" 
                type="text"
                value={description} 
                placeholder="Description" 
                onChange={event => setDescription(event.target.value)}
                />
            </label>

            <label>
                Price
                <input 
                name="price" 
                type="text" 
                value={price} 
                onChange={event => setPrice(event.target.value)}
                placeholder="Price" 
                />
            </label>

            <label>
                Discount Percentage
                <input 
                name="discountPercentage" 
                type="discountPercentage" 
                value={discountPercentage} 
                onChange={event => setdiscountPercentage(event.target.value)}
                placeholder="Discount Percentage" 
                />
            </label>
            </div>

            <div>
            <label>
                Category
                <select 
                name="category"
                value={category}
                onChange={event => setCategory(event.target.value)}
                >
                <option value="">-- None --</option>
                <option value="lighting">lighting</option>
                <option value="motorcycle">motorcycle</option>
                <option value="automotive">automotive</option>
                <option value="sunglasses">sunglasses</option>
                <option value="womens-jewellery">womens-jewellery</option>
                <option value="womens-bags">womens-jewellery</option>
                <option value="womens-watches">womens-watches</option>
                <option value="mens-watches">mens-watches</option>
                <option value="mens-shoes">mens-shoes</option>
                <option value="mens-shirts">mens-shirts</option>
                </select>
            </label>

            <label>
                Rating
                <input
                name="rating"
                type="float"
                placeholder="Rating"
                //minLength={1}
                //maxLength={1}
                min={1}
                max={5}
                value={rating} 
                onChange={event => setRating(event.target.value)}

                />
            </label>

            <label>
                Stock
                <input
                name="stock"
                type="number"
                placeholder="How many in the stock"
                min={0}
                value={stock} 
                onChange={event => setStock(event.target.value)}

                />
            </label>

            <label>
                Brand
                <input
                name="brand"
                type="text"
                placeholder="Brand"
                min={0}
                value={brand} 
                onChange={event => setBrand(event.target.value)}
                />
            </label>

            <label>
                Thumbnail
                <input
                name="thumbnail"
                type="url"
                placeholder="thumnbnail url"
                value={thumbnail} 
                onChange={event => setThumbnail(event.target.value)}

                />
            </label>

            <label>
                Images
                <input
                name="images"
                type="url"
                placeholder="images url"
                value={images} 
                onChange={event => setImages(event.target.value)}

                />
            </label>

            <button type="submit">Add Product</button>
            </div>

        </form>



        {products.map(eachProduct => (
            <ListItem
                key={eachProduct.id}
                product={eachProduct}
                deleteItem={deleteItem} // Pass delete handler
                editItem={editItem}
            />
        ))}
    </div>)
}


export default List;
