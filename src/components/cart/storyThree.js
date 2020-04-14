import React, { useContext } from 'react';
import { CartContext } from './cartContext';


export const StoryThreeCart = () => {
    const regularBookPrice = 1.5;
    const fictionBookPrice = 3;

    const regularBookFirst2Days = 1;
    const minimumRegularBookCharge = 2; // if days rented is less than 2 days
    const minimunNovelBookCharge = 4.5; // if days rented is less than 3 days


    let [cart] = useContext(CartContext);
    let price = [];


    let numOfRegularRented2days = 0;
    let numOfNovelRented3days = 0;

    (() => {
        cart.map((item) => {
            if (item.type === 'regular' && item.duration > 2) {
                return numOfRegularRented2days +=1
            }
            if (item.type === 'novel' && item.duration > 3) {
                return numOfNovelRented3days +=1
            }
        })

        cart.map((item) => {
            if (item.type === 'novel' && item.duration >= 3) {
                price.push((3 * regularBookFirst2Days * item.bookNum) + ((item.duration-3) * regularBookPrice))
            }
            if (item.type === 'novel' && item.duration < 3) {
                price.push(minimunNovelBookCharge* item.bookNum )
            }
            if (item.type === 'fiction') {
            price.push(item.duration * fictionBookPrice * item.bookNum)
            }
            if (item.type === 'regular' && item.duration > 2) {
                price.push((2 * regularBookFirst2Days * item.bookNum) + ((item.duration-3) * regularBookPrice))
            }
            if (item.type === 'regular' && item.duration <= 2) {
                price.push(minimumRegularBookCharge * item.bookNum)
            }
        })
        return price;
    })();

    const total = price ? price.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) : console.log('woi');

    return (
        <div>
        <span>Number of Books in cart : {cart.length}</span>
        <br />
        <span>Price of Minimum for Novel Books for the first 3 days : {minimunNovelBookCharge}</span>
        <br />
        <span>Price of Minimum for Regular Books for the first 2 days : {minimumRegularBookCharge}</span>
        <br />
        <span>Price of Novel and Regular Books for the after first 3 or 2 days respectively: {regularBookFirst2Days}</span>
        <br />
        <span>Price of Fiction Books : {fictionBookPrice}</span>
        <br />
        <span>Total Duration the books are been rented : {}</span>
        <br />
        <span>Total price : {total}</span>
        </div>
    )
}