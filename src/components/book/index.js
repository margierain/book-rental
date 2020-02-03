import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Book } from './book';

const BookList = () => {
    let [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line
        allBooks = [];
        axios.get(`https://api.myjson.com/bins/1f5h3i`)
        .then(res => {
            res.data.books.map((book) => allBooks.push(book))
            return setAllBooks(allBooks);
        })
    }, [])

  return (
    <div className="book">
        <h2>Rent Book</h2>
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