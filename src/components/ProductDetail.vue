<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card-actions>
            <v-btn color="primary" size="large" variant="flat" @click="goBack">Retour</v-btn>
          </v-card-actions>
        <h1> {{ productDetail.title }}</h1>
        <v-card>
          <v-img
            :src="productDetail.image"
            height="400px"
          ></v-img>
          <v-card-subtitle>${{ productDetail.price }}</v-card-subtitle>
          <v-card-text>{{ productDetail.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary"  variant="flat" size="x-large"  @click="addToCart(productDetail)">Ajouter au Panier</v-btn>
            <v-btn color="pink-lighten-2" size="x-large"  variant="flat" @click="addToFav(productDetail)">Ajouter au favoris</v-btn>
            
          </v-card-actions>
        </v-card>
      </v-col>
      <v-row>
      <v-col cols="12">
        <div class="d-flex align-center">
          <span class="mr-2">Note:</span>
          <v-rating
              :value="rate"
              readonly
              half-increments
              class="mr-2"
              color="amber darken-2"
              background-color="grey lighten-2"
            ></v-rating>
          <span class="ml-2">{{ countrate }} reviews</span>

        
        </div>
      </v-col>
    </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '@/stores/cart.js';
import { fav }from '@/stores/fav.js';
import 'vuetify/styles'


export default {
  name: 'ProductDetail',
  data() {
    return {
      productDetail: {},
      rate: 0,
      countrate: 0
    };
  },
  props: {
    product: Object
  },
  mounted() {
    this.fetchProductDetails();
  },
  methods: {
    async fetchProductDetails() {
      try {
        const productId = this.$route.params.id; 
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        this.productDetail = data;
        console.table(data)
        this.countrate =data.rating.count;
        this.rate = data.rating.rate;
      } catch (error) {
        console.error('Error catching products:', error);
      }
    },
    addToCart(productDetail) {
      store.addToCart(productDetail)
    },
    addToFav(productDetail) {
      fav.addToFav(productDetail)
    },
    goBack() {
      this.$router.go(-1); 
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
