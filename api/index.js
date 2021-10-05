import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseUrl,
})

// const products = axios.create({ // 이런식으로도 할 수 있다.
//   baseURL: 'http://localhost:3000/products',
// })

function fetchProductById(id) {
  if (id) {
    return instance.get(`/products/${id}`)
  } else {
    return instance.get('/products')
  }
}

function fetchProductsByKeyword(keyword) {
  return instance.get('/products', {
    params: {
      name_like: keyword,
    },
  })
}

function createCartItem(cartItem) {
  return instance.post('/carts', cartItem)
}

function fetchCartItems() {
  return instance.get('/carts')
}

export { fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItems }
