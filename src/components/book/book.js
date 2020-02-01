import React, { useContext } from 'react';
import { CartContext } from '../cart/cartContext';

export const Book = (props) => {
  let [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const book = { type: props.type, };
    cart = currentState => [...currentState, book]
    setCart(cart);
  }
  return (
    <div>
      <h2>{props.type}</h2>
      <button onClick={addToCart}>Add to cart</button>
      <hr />
    </div>
  )
}