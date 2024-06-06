<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      ><router-link :to="{ name: 'ProductDetail', params: { id: product.id }} "  @click="selectProduct(product)">test</router-link>
        <v-card>
          <v-img
            :src="product.image"
            height="200px"
          ></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(product)">Ajouter au Panier</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '@/stores/cart.js';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      cart: store.cart,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error catching products:', error);
      }
    },
    addToCart(product) {
      // old version this.cart.push(product);
      store.addToCart(product)
    },
  }
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
.v-card-text{
  min-height:170px;
}
</style>    