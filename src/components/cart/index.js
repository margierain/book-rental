import React, {useContext} from 'react';
import { CartContext } from './cartContext';


export const Cart = () => {
  const bookPrice = 1;

  const [cart, setCart] = useContext(CartContext);

  const totalDurations = cart.map((item) => item.duration)
  const durationSum = totalDurations.reduce((a, b) => a + parseInt(b), 0)
  const totalPrice =  (cart.length * bookPrice) * durationSum;

  return (
    <div>
      <span>Number of Books in cart : {cart.length}</span>
      <br />
      <span>Price per Book : {bookPrice}</span>
      <br />
      <span>Total Duration the books are been rented : {durationSum}</span>
      <br />
      <span>Total price : {totalPrice}</span>
    </div>
  )
}