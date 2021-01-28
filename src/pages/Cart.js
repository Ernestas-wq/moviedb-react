import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const Cart = () => {
  const { cart, setIsHomeOpen } = useGlobalContext();
  useEffect(() => {
    setIsHomeOpen(false);
  }, []);

  return (
    <main>
      <section className="cart">
        <h1>Cart </h1>
        {!cart.items.length > 0 && <h2>Your cart is empty</h2>}
        {cart.items.map((item, index) => {
          const { id, img, title } = item;
          return (
            <div key={index} className="cart__container">
              <div className="cart__image">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <button>Remove</button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Cart;
