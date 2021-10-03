import { fetchCartItems } from '~/api'

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS' // 추후의 관리, 타입측면에서 이점이 있다?

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  },
  addCartItem(state, cartItem) {
    state.cartItems.push(cartItem)
  },
}

export const actions = {
  // 동적 키값할당
  async [FETCH_CART_ITEMS]({ commit }) {
    const response = await fetchCartItems()
    commit('setCartItems', response.data)
  },
  // @param2 nuxtContext
  async nuxtServerInit(storeContext) {
    await storeContext.dispatch(FETCH_CART_ITEMS)
  },
}
