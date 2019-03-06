
import { types, destroy } from 'mobx-state-tree';
import { WishListItem } from './WishListItem';

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    },
    remove(item) {
      // self.items.splice(self.items.indexOf(item), 1)
      destroy(item) // it just removes an item from the container it lives in.
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum,entry) => sum+entry.price, 0)
    }
  }))