<template>
<v-app>
    <v-app-bar app>
      <v-toolbar-title>Carrefour</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge
        :content="cart.length"
        color="primary"
        overlap
      >¨
      PANiereee
        <v-icon>mdi-cart</v-icon>
      </v-badge>
      <v-icon>mdi-cart</v-icon>
      <v-btn prepend-icon="mdi-cart">
        panier
        <v-badge color="red" overlap :content="cart.length">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>

      <v-btn text :to="{ name: 'Home' }">Home {{ cart.lenght }} </v-btn>
      <v-btn text :to="{ name: 'Products' }">Products</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { store } from '@/stores/cart.js';


//const icons = { mdiAccount }

export default {
  name: 'App',
  computed: {
    cart() {
      return store.cart;
    }
  }
};
</script>

<style>

</style>
