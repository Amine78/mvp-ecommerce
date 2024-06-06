import { reactive } from 'vue';

export const store = reactive({
  cart: [],
  addToCart(product) {
    this.cart.push(product);
    //console.log('Ajouter au Panier:', product);
    //console.log(this.cart.length);
  },
  removeFromCart(index) {
    this.cart.splice(index, 1);
    //console.log('Remove Panier:', index);
    //console.log(this.cart.lenght);
  }
});