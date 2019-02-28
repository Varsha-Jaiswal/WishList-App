import { WishListItem } from "./WishList"

it("can create instance", () => {
    const item = WishListItem.create({
        "name": "VarsHa",
        "age": 21
    })
    expect(item.age).toBe(21)
})