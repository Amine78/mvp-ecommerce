<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Bienvenue dans la Boutique E-commerce</h1>
        <v-btn color="primary" :to="{ name: 'Products' }">Voir les Produits</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeMvp',
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>