<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Liste des produits</h1>
      </v-col>
    </v-row>
    <ProductList />
  </v-container>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'ProductsAll',
  components: {
    ProductList,
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>