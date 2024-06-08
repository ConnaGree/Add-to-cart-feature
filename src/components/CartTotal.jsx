import React from 'react'

const CartTotal = ({cartItems}) => {
  // Calculates the total cost of all the products added into the cart
  const total__cost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart__total">
      <h2>CartTotal</h2>
      <div className="price__detail-container">
        <div className="price__container">
          <p className="final__price">
            Subtotal <span>Br {total__cost.toFixed(2)}</span>
          </p>
        </div>
        <div className="price__container">
          <p className="final__price">
            Total <span>Br {total__cost.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <button className="checkout__btn">Proceed to Checkout</button>
    </div>
  );
}

export default CartTotal