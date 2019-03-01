import { WishListItem } from "./WishListItem"
import { WishList } from "./WishList";

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
  newData.add(
    WishListItem.create({
      name: "New item",
      price: 40
    })
  )
  expect(newData.items.length).toBe(1)
  newData.items[0].changeName("AB")
  expect(newData.items[0].name).toBe("AB")
})