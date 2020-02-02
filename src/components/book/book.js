import React, { useContext } from "react";
import { CartContext } from "../cart/cartContext";
import { useForm, FormContext } from 'react-hook-form';

const allBooks = [];
let book = {};

export const Book = props => {
  let [cart, setCart] = useContext(CartContext);

  const addToCart = (data) => {
    const { duration, bookNum } = data;
    let duration1 = parseFloat(duration);
    let bookNum1 = parseFloat(bookNum)

  if( allBooks.length >= 1) {
    allBooks.map((book) => {
      if(book.id === props.id && (parseFloat(book.duration) !== parseFloat(duration))) {
        duration1  += parseFloat(book.duration)
      }

      if(props.id === book.id && (parseFloat(book.bookNum) !== parseFloat(bookNum))) {
        bookNum1 += parseFloat(book.bookNum)
      }
    })
  }
  book = Object.assign({}, { type: props.type, id: props.id, duration: duration1, bookNum:bookNum1 });
  allBooks.push(book);

    cart = currentState => currentState.concat(allBooks)
    setCart(cart);
  };

  const methods = useForm();
    const { register, handleSubmit } = methods;

  return (
    <div className="items">
      <h2>{props.type}</h2>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(addToCart)}>
           <label>Number of rental days</label>
            <input type="number" name="duration" placeholder="Duration"  ref={register({ required: true })}/>
            <label>Number of books your renting</label>
            <input type="number" name="bookNum" placeholder="Book Number"  ref={register({ required: true })}/>
            <button type="submit" >Add to cart</button>
        </form>
      </FormContext>
      <hr />
    </div>
  );
};
