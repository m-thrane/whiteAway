import React from 'react';
import '../App.css';

  const Products = ({ products }) => {
    return (
      <div className="productsList">
        {products.map((product) => (
          <div className="card" key={product.productId}>
            <img src={product.image} className="card-image" alt="{product.name}" />
            <a href={product.url}>
              <p className="card-brand">{product.brand}</p>
              <p className="card-name">{product.name}</p>
            </a>
            <p className="card-price">{product.price},-</p>
            <div className="card-quantity">
              <button className="quantityIncrement">
                &#xff0d;
              </button>
              <input className="quantityInput" type="text" value="1" readOnly />
              <button className="quantityDecrement">
                &#xff0b;
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  };

export default Products
