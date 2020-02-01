import React, { useContext } from "react";
import { CartContext } from "../cart/cartContext";
import { useForm, FormContext } from 'react-hook-form'

export const Book = props => {
  let [cart, setCart] = useContext(CartContext);


  const addToCart = (data) => {
    const { duration } = data;
    const book = { type: props.type, id: props.id, duration: duration };

    cart = currentState => [...currentState, book];
    setCart(cart);
  };

  const methods = useForm();
    const { register, handleSubmit } = methods;

  return (
    <div className="items">
      <h2>{props.type}</h2>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(addToCart)}>
             <input type="number" name="duration" placeholder="Duration"  ref={register({ required: true })}/>
            <button type="submit" >Add to cart</button>
        </form>
      </FormContext>
      <hr />
    </div>
  );
};
