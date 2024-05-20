import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

function MyCart() {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">
            Card title
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-success"> <FaShoppingCart className='fs-4' /> Add to Cart</a>
        </div>
      </div>
    </div>
  );
}

export default MyCart;