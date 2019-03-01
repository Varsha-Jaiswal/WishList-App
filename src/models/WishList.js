
import { types } from 'mobx-state-tree';
import { WishListItem } from './WishListItem';

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), [])
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    }
  }))