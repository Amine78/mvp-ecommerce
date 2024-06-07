<template>
  <v-card-actions>
    <v-btn color="primary" size="large" variant="flat" @click="goBack">Retour</v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    goBack() {
      this.$router.go(-1); // Retourne en arrière dans l'historique de navigation
    }
  }
};
</script>
