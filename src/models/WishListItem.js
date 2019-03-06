import { types, getParent } from 'mobx-state-tree';

export const WishListItem = types
  .model({
    name: types.optional(types.string, ''),
    price: types.optional(types.number, 0),
    image: ''
  })
  .actions(self => ({
    changeName(newName) {
      self.name = newName
    },
    changePrice(newPrice) {
      self.price = newPrice
    },
    changeImage(newImage) {
      self.image = newImage
    },
    remove() {
      getParent(self, 2).remove(self)
    }
  }));