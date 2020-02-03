import React, { useContext } from "react";
import { CartContext } from "./cartContext";

export const StoryOneCart = () => {
  const bookPrice = 1;
  const [cart] = useContext(CartContext);

  let price = [];
  cart.map(item => {
    return price.push(item.duration * bookPrice * item.bookNum);
  })

  const totalPrice = price ? price.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) : console.log('woi');

  return (
    <div>
      <span>Number of Books in cart : {cart.length}</span>
      <br />
      <span>Price per Book : {bookPrice}</span>
      <br />
      <span>Total Duration the books are been rented : {}</span>
      <br />
      <span>Total price : {totalPrice}</span>
    </div>
  );
};
