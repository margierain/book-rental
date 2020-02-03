import React, { useContext, useState } from "react";
import { CartContext } from "../cart/cartContext";
import { useForm, FormContext } from "react-hook-form";

export const Book = props => {
  let [, setCart] = React.useContext(CartContext);

  const addToCart = data => {
    setCart(cart => {
      const { duration, bookNum } = data;
      let duration1 = duration ? parseFloat(duration) : 0;
      let bookNum1 = bookNum ? parseFloat(bookNum) : 0;

        if (!cart.find(pb => props.id === pb.id)) {
          let bookRented = Object.assign(
            {},
            {
              type: props.type,
              id: props.id,
              duration: duration1,
              bookNum: bookNum1
            }
          );
          return cart.concat([bookRented]);
        } else {
          return cart.map(book => {
            if (book.id === props.id) {
              return Object.assign({}, book, {
                duration: book.duration + duration1,
                bookNum: book.bookNum + bookNum1
              })
            }
            return book;
          });
        }

    });
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
          <div className="formInputs">
            <label>Number of rental days: </label>
            <input
              className="formField"
              type="number"
              name="duration"
              value={values.duration}
              placeholder="0"
              onChange={handleInputChange}
              min="0"
              required
            />
            <label>Number of books your renting: </label>
            <input
              className="formField"
              type="number"
              name="bookNum"
              value={values.bookNum}
              placeholder="0"
              onChange={handleInputChange}
              min="0"
              required
            />
            <button className="SubmitField" type="submit">Add to cart</button>
          </div>
        </form>
      </FormContext>
      <hr />
    </div>
  );
};
