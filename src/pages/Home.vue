<template>
  <v-container>
    <v-row>
        <v-carousel>
        <v-carousel-item
            src="https://static-cms.carrefour.fr/sites/default/files/2024-04/bloc-push-image-grand_desktop_2380x578-mcma--2024-s17.jpg?itok=PewhWUVp"
            cover
        ></v-carousel-item>

        <v-carousel-item
            src="https://cdn.edi-static.fr/image/upload/c_scale,dpr_auto,f_auto,q_auto,w_auto/c_limit,w_auto/v1/Img/BREVE/2024/2/402894/Carrefour-ameliore-son-chiffre-affaires--F.jpg"
            cover
        ></v-carousel-item>
        </v-carousel>
      <v-col cols="12" class="text-center" >
        <h1>Bienvenue dans la Boutique E-commerce</h1>
        <v-btn color="primary" :to="{ name: 'Products' }" large >Voir les Produits</v-btn>
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