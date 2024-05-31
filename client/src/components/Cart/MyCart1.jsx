// MyCart.jsx
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

function MyCart({ images, title, price }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} className="card-img-top" alt="Product" style={{ height: '260px' }} />
        ))}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5>{price}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-success ms-5">
            <FaShoppingCart className="fs-4  " /> Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
