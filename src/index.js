import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import { WishList } from "./models/WishList"
import { onSnapshot } from 'mobx-state-tree';

let initialState = {
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
}

if(localStorage.getItem("wishListApp")) {
  const json = JSON.parse(localStorage.getItem("wishListApp"))
  if(WishList.is(json)) initialState = json
}

const wishList = WishList.create(initialState)

onSnapshot(wishList, snapshot => {
  localStorage.setItem("wishListApp", JSON.stringify(snapshot))
})

ReactDOM.render(<App wishList={wishList}/>, document.getElementById('root'));

setInterval(() => {
    wishList.items[0].changePrice(wishList.items[0].price +1)
}, 1000)