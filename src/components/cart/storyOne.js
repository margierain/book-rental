import React, { useContext } from "react";
import { CartContext } from "./cartContext";

export const StoryOneCart = () => {
  const bookPrice = 1;
  const [cart, setCart] = useContext(CartContext);

  let price = [];

  console.log(cart, 'art')

  cart.map(item => {
    if (item.type === "novel") {
      price.push(item.duration * bookPrice * item.bookNum);
      console.log(item.duration, 'tem.duration', bookPrice)
    }
    if (item.type === "fiction") {
      price.push(item.duration * bookPrice * item.bookNum);
    }
    if (item.type === "regular") {
      price.push(item.duration * bookPrice * item.bookNum);
    }
  });

  const totalPrice = price ? price.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) : console.log('woi');

  return (
    <div>
      <span>Number of Books in cart : {cart.length}</span>
      <br />
      <span>Price per Book : {bookPrice}</span>
      <br />
      <span>Total Duration the books are been rented : {}</span>
      <br />
      <span>Total price : {price.slice(-1)[0]}, {totalPrice}</span>
    </div>
  );
};
