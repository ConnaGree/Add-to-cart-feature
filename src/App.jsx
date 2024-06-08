import React, { useState, useRef } from "react";
import { Cart, Product, CartTotal } from "./components";
import products from "./constants/data";
import "./styles.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Controls the products added or removed

  // Adds a product the cart
  // If a product already exists in cart, updates the "quantity" property of the product
  // Otherwise add a new "quantity" property with the value mapped to 1
  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[existingIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Updates the quantity property of a product when
  // Increment/decrement buttons are clicked
  const updateQuantity = (index, newQuantity) => {
    const newCartItem = [...cartItems];
    newCartItem[index].quantity = newQuantity;
    setCartItems(newCartItem);
  };

  // Filters the cartItems array to remove
  // a product from the cart
  const removeCartItem = (index) => {
    const newCartState = cartItems.filter(
      (_, itemIndex) => itemIndex !== index
    );
    setCartItems(newCartState);
  };

  return (
    <div className="App">
      <div className="cart__container">
        <Cart
          cartItems={cartItems}
          removeCartItem={removeCartItem}
          updateQuantity={updateQuantity}
        />

        <CartTotal cartItems={cartItems} />
      </div>
      <div className="products__container">
        {products.map((product, index) => (
          <Product prod_details={product} addToCart={addToCart} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
