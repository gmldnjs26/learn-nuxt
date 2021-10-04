<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="item in $store.state.cartItems" :key="item.id">
        <p>{{ item.name }}</p>
        <image :src="item.imageUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
