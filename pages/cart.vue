<template>
  <div>
    <h1>Cart Page</h1>
    <ul>
      <li v-for="item in $store.state.cartItems" :key="item.id">
        {{ item }}
        <p>{{ item.name }}</p>
        <image :src="item.imageUrl" />
      </li>
    </ul>
    <button>구매하기</button>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store'

export default {
  async asyncData({ store }) {
    await store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style></style>
