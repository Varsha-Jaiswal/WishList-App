import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import { WishList } from "./models/WishList"

const wishList = WishList.create({
    items: [
        {
            name: "item 1",
            price: 10,
            image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
          },
          {
            name: "item 2",
            price: 23.4,
            image: "https://cdn130.picsart.com/289472792045201.jpg"
          }
    ]
})
ReactDOM.render(<App wishList={wishList}/>, document.getElementById('root'));

setInterval(() => {
    wishList.items[0].changePrice(wishList.items[0].price +1)
}, 1000)