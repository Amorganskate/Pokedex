<template>
  <v-app>
    <v-navigation-drawer app>

    </v-navigation-drawer>
    <v-bar-app app>
      
    </v-bar-app>
    <v-content>
      <v-toolbar>
        <search :change_pokedex_pokemon="change_pokedex_pokemon"></search>
      </v-toolbar>
      <v-container fluid>
        <router-view :new_pokemon="pokemon"></router-view>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
import search from '@/components/pokemon_search'
export default {
  name: 'App',
  components:{
    search
  },
  data: () => ({
    pokemon: '',
  }),
  methods:{
    change_pokedex_pokemon(pokemon){
      this.pokemon = pokemon;
    }
  }
};
</script>
