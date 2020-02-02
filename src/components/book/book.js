import React, { useContext, useState } from "react";
import { CartContext } from "../cart/cartContext";
import { useForm, FormContext } from "react-hook-form";

const allBooks = [];

export const Book = props => {
  let [cart, setCart] = useContext(CartContext);
  let idExists = {};

  const addToCart = data => {
    let bookRented = {};
    const { duration, bookNum } = data;
    let duration1 = duration ? parseFloat(duration) : 0;
    let bookNum1 = bookNum ? parseFloat(bookNum) : 0;

    if (allBooks.length >= 1) {
      allBooks.map(book => {
        if (book.id === props.id) {
          book.duration += duration1
        }

        if (book.id === props.id ) {
            book.bookNum = bookNum1 += parseFloat(book.bookNum);
        }
      });

      idExists = Object.assign({}, allBooks.find(pb => props.id === pb.id))
      if (Object.entries(idExists).length < 1) {
        bookRented = Object.assign({},
          { type: props.type, id: props.id, duration: duration1, bookNum: bookNum1 }
        );
        allBooks.push(bookRented);
      }
    } else if(allBooks.length === 0) {
      bookRented = Object.assign({},
        { type: props.type, id: props.id, duration: duration1, bookNum: bookNum1 }
      );
      allBooks.push(bookRented);
    }
    cart = allBooks
    setCart(cart);
  };

  const [values, setValues] = useState({ duration: 0, bookNum: 0 });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addItem = () => {
    const { duration, bookNum } = values;

    if (!duration || !bookNum) return;

    addToCart(values);
    setValues({ duration: 0, bookNum: 0 });
  };

  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <div className="items">
      <h2>{props.type}</h2>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(addItem)}>
          <label>Number of rental days: </label>
          <input
            type="number"
            name="duration"
            value={values.duration}
            placeholder="Duration"
            onChange={handleInputChange}
            required
          />
          <label>Number of books your renting: </label>
          <input
            type="number"
            name="bookNum"
            value={values.bookNum}
            placeholder="Book Number"
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add to cart</button>
        </form>
      </FormContext>
      <hr />
    </div>
  );
};
