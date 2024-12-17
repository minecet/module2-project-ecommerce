import React from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';

function Sidebar({selectedProduct}) {
  return (
    <div>
    <aside className="linkMenu">
      <ul className='optionsMenu'>
      <li> <NavLink to='/list'>Dashboard</NavLink> </li>
        <li> <NavLink to='/'>Item Details</NavLink> </li>
        <li> <NavLink to='/about'>About Page</NavLink> </li>
        
      </ul>     
    </aside>

          {/* Conditional rendering for Item Details */}
      {selectedProduct && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h2>Item Details</h2>
          <h3>{selectedProduct.title}</h3>
          <p><strong>Description:</strong> {selectedProduct.description}</p>
          <p><strong>Price:</strong> ${selectedProduct.price}</p>
          <p><strong>Category:</strong> {selectedProduct.category}</p>
          <p><strong>Stock:</strong> {selectedProduct.stock}</p>
          <img
            src={selectedProduct.thumbnail}
            alt="Item Thumbnail"
            style={{ width: "150px", marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;