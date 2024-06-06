<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Product List</h1>
      </v-col>
    </v-row>
    <ProductList />
  </v-container>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Products',
  components: {
    ProductList,
  },
};
</script>

<style scoped>

</style>