import React, { useState, useRef } from "react";
import { Cart, Product, CartTotal } from "./components";
import products from "./constants/data";
import "./styles.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[existingIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    console.log(cartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const newCartItem = [...cartItems];
    newCartItem[index].quantity = newQuantity;
    setCartItems(newCartItem);
  };

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

        <CartTotal cartItems={cartItems}/>
      </div>
      <div className="products__container">
        {products.map((product, index) => (
          <Product prod_details={product} addToCart={addToCart} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default App;
