<template>
  <v-app>
    <Pokedex/>
  </v-app>
</template>

<script>
import Pokedex from '@/components/pokedex.vue'
export default {
  name: 'App',

  components: {
    Pokedex
  },

  data: () => ({
    //
  }),
};
</script>
