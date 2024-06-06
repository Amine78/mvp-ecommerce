<!-- ProductDetail.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-img
            :src="product.image"
            height="400px"
          ></v-img>
          <!-- <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text> -->
          <v-card-actions>
            <!-- <v-btn color="primary" click="addToCart(product)">Ajouter au Panier</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      // Ajoutez le produit au panier
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
