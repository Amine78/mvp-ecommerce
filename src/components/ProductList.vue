<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card hover class="pa-3 items">
          <v-img
            :src="product.image"
            height="200px"
          ></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-actions class="btn-action">
            <v-btn color="primary" @click="addToCart(product)" variant="tonal" >Ajouter au Panier</v-btn>
            <v-btn color="pink" class="align-left" @click="addToFav(product)" variant="tonal" >Ajouter aux Favoris</v-btn>
            <v-btn color="secondary" class="align-left"  variant="tonal" :to="{ name: 'ProductDetail', params: { id: product.id }} ">Détails</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '@/stores/cart.js';
import { fav }from '@/stores/fav.js';

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
    addToFav(product) {
      // old version this.cart.push(product);
      fav.addToFav(product)
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
.items{
  text-decoration: none;
  padding: 10px;
}
.btn-action{
  z-index: 900;
}
</style>    