import { WishListItem } from "./WishListItem"
import { WishList } from "./WishList";
import { getSnapshot, onSnapshot } from "mobx-state-tree";
import { reaction } from "mobx";

it("can create a instance", () => {
  const item = WishListItem.create({
    name: "VarsHa",
    price: 20
  })
  expect(item.price).toBe(20)
  item.changeName("AB")
  expect(item.name).toBe("AB")
})

it("can create a wislist", () => {
  const list = WishList.create({
    items: [
      {
        name: "VarsHa",
        price: 23
      }
    ]
  })
  expect(list.items.length).toBe(1)
  expect(list.items[0].price).toBe(23)
})

it("can add new data" , () => {
  const newData = WishList.create()
  const state = []
  onSnapshot(newData, snapshot => {
    state.push(snapshot)
  })
  newData.add({
      name: "New item",
      price: 40
    })
  expect(newData.items.length).toBe(1)
  newData.items[0].changeName("AB")
  expect(newData.items[0].name).toBe("AB")
  expect(getSnapshot(newData)).toMatchSnapshot()
})

it('can calculate total price', () => {
  const list = WishList.create({
    items: [
      {
        name: "item 1",
        price: 10,
        image: ""
      },
      {
        name: "item 2",
        price: 23.4,
        image: ""
      }
    ]
  })
  expect(list.totalPrice).toBe(33.4)
  let changed = 0
  reaction(() => list.totalPrice,() => changed++)
  expect(changed).toBe(0)
  list.items[0].changePrice(20)
  expect(changed).toBe(1)
})