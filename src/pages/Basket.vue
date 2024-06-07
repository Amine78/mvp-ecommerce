<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Panier</h1>
      </v-col>
    </v-row>
    <v-row v-if="cartItems.length === 0">
      <v-col cols="12">
        <BackButton />
        <p>Votre panier est vide</p>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <BackButton />
      </v-col>
      <v-col cols="8">
        <v-list>
          <v-list-item-group >
            <v-list-item v-for="(item, index) in cartItems" :key="index" >
              <v-list-item-content>
                <v-list-item-avatar class="float-sm-left" >
                <img :width="100" aspect-ratio="4/3" :src="item.image" alt="Product Image" height="100" class="pr-3"/>
              </v-list-item-avatar>
                <v-list-item-title class="pb-2" >{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle class="pb-2"  >{{ item.price }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn @click="removeFromCart(index)" color="error">Supprimer</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="4" class="text-right">
        <h3>Total: {{ getTotalPrice() }}$ </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '@/stores/cart.js';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'BasketPage',
  components: {
    BackButton
  },
  data() {
    return {
      cartItems: []
    };
  },
  created() {
    this.cartItems = store.cart;
  },
  methods: {
    removeFromCart(index) {
      store.removeFromCart(index);
      this.cartItems = store.cart;
    },
    getTotalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  }
};
</script>

<style scoped>
.text-right {
  text-align: right;
}
</style>
