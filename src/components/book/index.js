import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Book } from './book';

const BookList = () => {
    let [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        allBooks = [];
        axios.get(`http://localhost:3004/books`)
        .then(res => {
            res.data.map((book) => allBooks.push(book))
            return setAllBooks(allBooks);
        })
    }, [])

  return (
    <div className="book">
        <h2>Book on Rent</h2>
        {allBooks.length > 0 ? (
            <div>
                {
                    allBooks.map(item => (
                    <Book type={item.type} id={item.id} key={item.id} />
                    ))
                }
            </div>
            ):(
                <div>
                    <p>No Books</p>
                </div>
            )
        }
    </div>
  );
}

export default BookList;