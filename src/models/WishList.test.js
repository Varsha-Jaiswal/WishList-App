import { WishListItem } from "./WishListItem"
import { WishList } from "./WishList";

it("can create a instance", () => {
  const item = WishListItem.create({
    name: "VarsHa",
    price: 20
  })
  expect(item.price).toBe(20)
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