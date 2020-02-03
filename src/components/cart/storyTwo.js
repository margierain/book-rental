import React, {useContext} from 'react';
import { CartContext } from './cartContext';


export const StoryTwoCart = () => {
  const regularBookPrice = 1.5;
  const fictionBookPrice = 3;
  const novelBookPrice = 1.5;

  const [cart] = useContext(CartContext);
  let price = [];

  cart.map(item => {
    if (item.type === "novel") {
      price.push(item.duration * novelBookPrice * item.bookNum);
    }
    if (item.type === "fiction") {
      price.push(item.duration * fictionBookPrice * item.bookNum);
    }
    if (item.type === "regular") {
      price.push(item.duration * regularBookPrice * item.bookNum);
    }
    return price;
  });

  const total = price ? price.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) : console.log('woi');

  return (
    <div>
      <span>Number of Books in cart : {cart.length}</span>
      <br />
      <span>Price of Novel and Regular Books : {regularBookPrice}</span>
      <br />
      <span>Price of Fiction Books : {fictionBookPrice}</span>
      <br />
      <span>Total Duration the books are been rented : {}</span>
      <br />
      <span>Total price : {total}</span>
    </div>
  )
}