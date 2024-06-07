import { reactive } from 'vue';

export const fav = reactive({
  fav: [],
  addToFav(product) {
    this.fav.push(product);
    console.log(this.fav);

  },
  removeFromFav(index) {
    this.fav.splice(index, 1);
  }
});