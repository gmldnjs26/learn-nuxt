export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItems) {
    state.cartItems.push(cartItems)
  },
}
