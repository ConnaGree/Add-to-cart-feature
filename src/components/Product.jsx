import React from "react";
import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ prod_details, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false); // For conditionally rendering the tick icon in the add to cart button

  // Passes the product to th addToCart function
  // And updates the addedToCart state
  const handleAddedToCart = () => {
    addToCart(prod_details);
    setAddedToCart(true);
  };

  return (
    <div className="product-card">
      <img src={prod_details.img} alt="product image" />
      <p className="product__name">{prod_details.name}</p>
      <p className="product__price">Br {prod_details.price}</p>
      <p className="product__description">{prod_details.description}</p>
      <button className="add__to-cart" onClick={handleAddedToCart}>
        {addedToCart ? (
          <span>
            Add to cart <FontAwesomeIcon icon={faCheck} />
          </span>
        ) : (
          "Add to cart"
        )}
      </button>
    </div>
  );
};

export default Product;
