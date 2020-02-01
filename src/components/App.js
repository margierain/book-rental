import React from 'react';
import './App.scss';
import BookList from './book';
import { Cart } from './cart';
import { CartProvider } from './cart/cartContext'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <div className="bookList">
          <BookList />
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
