<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="item in items" :key="item.id">
        <p>{{ item.name }}</p>
        <image :src="item.imageUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch(context) {
    const items = await context.store.state.cartItems
    return { items }
  },
}
</script>

<style></style>
