<template>
  <div>
    <h1>Cart Page</h1>
    <CartList />
    <button>구매하기</button>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store'
import CartList from '~/components/CartList.vue'

export default {
  components: { CartList },
  async asyncData({ store }) {
    await store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style></style>
