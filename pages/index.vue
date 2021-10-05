<template>
  <div class="app">
    <main>
      <SearchInput v-model="searchKeyword" @search="searchProduct" />
      <ul>
        <li v-for="item in products" :key="item.id" class="item flex" @click="moveToDetailPage(item.id)">
          <img class="product-image" :src="item.imageUrl" alt="" />
          <p>{{ item.name }}</p>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니</button>
      </div>
    </main>
  </div>
</template>

<script>
import { fetchProductsByKeyword, fetchProductById } from '@/api'
import SearchInput from '@/components/SearchInput.vue'
// import { debounce } from 'lodash'
export default {
  components: { SearchInput },
  async asyncData() {
    const response = await fetchProductById()
    const products = response.data.map((item) => {
      return { ...item, imageUrl: `${item.imageUrl}?random=${Math.random()}` }
    })
    return { products }
  },
  data() {
    return {
      searchKeyword: '',
    }
  },
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`/detail/${id}`)
    },
    moveToCartPage() {
      this.$router.push('/cart')
    },
    async searchProduct() {
      const response = await fetchProductsByKeyword(this.searchKeyword)
      this.products = response.data.map((item) => {
        return { ...item, imageUrl: `${item.imageUrl}?random=${Math.random()}` }
      })
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
