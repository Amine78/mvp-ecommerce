<template>
<v-app>
    <v-app-bar app>
        <v-btn icon :to="{ name: 'Home' }">
          <v-icon>
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/langfr-140px-Logo_Carrefour.svg.png" alt="Carrefour" width="24" height="24" />
          </v-icon>
        </v-btn>
      <v-spacer></v-spacer>
      <v-icon>mdi-cart</v-icon>


      <v-btn text :to="{ name: 'Home' }">Home {{ cart.lenght }} </v-btn>
      <v-btn text :to="{ name: 'Products' }">Products</v-btn>
      <v-btn variant="tonal" color="pink" :to="{ name: 'favorites' }" >
        Favoris
        <v-badge color="pink" overlap :content="fav.length">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn :to="{ name: 'Basket' }" prepend-icon="mdi-cart" variant="tonal" color="red">
        panier
        <v-badge  color="red" overlap :content="cart.length">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { store } from '@/stores/cart.js';
import { fav } from '@/stores/fav.js';

//const icons = { mdiAccount }

export default {
  name: 'App',
  computed: {
    cart() {
      return store.cart;
    },
    fav(){
      return fav.fav;
    }
  }
};
</script>

<style>
.v-btn{
  margin-left: 10px;
}
</style>
