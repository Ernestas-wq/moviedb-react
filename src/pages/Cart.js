import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const Cart = () => {
  const { cart, setIsHomeOpen, removeFromCart } = useGlobalContext();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setIsHomeOpen(false);
  }, []);

  const handleClick = () => {
    setShowMessage(true);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [showMessage]);

  if (cart.items.length === 0)
    return (
      <main>
        <h2>Your cart is empty</h2>
      </main>
    );

  const total = cart.items
    .map(item => parseFloat(item.price))
    .reduce((acc, val) => acc + val)
    .toFixed(2);

  return (
    <main>
      <section className="cart">
        <h1>Cart </h1>
        {!cart.items.length > 0 && <h2>Your cart is empty</h2>}
        {cart.items.map((item, index) => {
          const { delete_id, img, title, price } = item;
          // console.log(delete_id);
          return (
            <div key={index} className="cart__container">
              <div className="cart__image">
                <img src={img} alt={title} />
              </div>
              <h3>
                {title} <span>${price}</span>
              </h3>
              <button onClick={() => removeFromCart(delete_id)}>Remove</button>
            </div>
          );
        })}
        <div className="cart__checkout">
          <h4>
            Total: <span>{total}$</span>
          </h4>
          <button className="btn" onClick={handleClick}>
            Check Out
          </button>
        </div>
        {showMessage && (
          <div className="cart__message">
            <p>Oops! This doesn't actually do anything</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
