<template>
  <div>
    <h1>메인 페이지</h1>
    <div>
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex" @click="moveToDetailPage(product.id)">
          <img class="product-image" :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
        </li>
      </ul>
    </div>
    {{ products }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data.map((item) => {
      return { ...item, imageUrl: `${item.imageUrl}?random=${Math.random()}` }
    })
    return { products }
  },
  methods: {
    moveToDetailPage(id) {
      console.log(id)
    },
  },
}
</script>

<style></style>
