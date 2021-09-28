<template>
  <div class="app">
    <main>
      <ul>
        <li v-for="item in products" :key="item.id" class="item flex" @click="moveToDetailPage(item.id)">
          <img class="product-image" :src="item.imageUrl" alt="" />
          <p>{{ item.name }}</p>
          <span>{{ item.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
// import { debounce } from 'lodash'
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
      this.$router.push(`/detail/${id}`)
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
