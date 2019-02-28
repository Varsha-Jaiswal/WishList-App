import { types } from "mobx-state-tree"

export const WishListItem = types.model({
    name: types.string,
    age: types.number
})