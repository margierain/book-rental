import React from 'react';
import './App.css';
import BookList from './book';
import { Cart } from './cart';
import { CartProvider } from './cart/cartContext'

function App() {
  return (
    <CartProvider>
      <div>
        <Cart />
        <BookList />
      </div>
    </CartProvider>
  );
}

export default App;
