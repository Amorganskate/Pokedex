<template>
  <v-container class="text-center justify-center">
    <v-card max-width="400" v-if="pokemon != null">
      <v-btn v-if="pokemon_id != 1" color="primary" @click="pokemon_id = pokemon_id - 1; get_pokemon()">-</v-btn>
      <v-avatar size="133">
        <img v-bind:src="pokemon.sprites.front_default">
      </v-avatar>
      <v-btn color="primary"  @click="pokemon_id = pokemon_id + 1; get_pokemon()">+</v-btn>
    </v-card>
    
  </v-container>
</template>

<script>
import { RepositoryFactory } from '../repositorys/RepositoryFactory'
const PokemonRepository = RepositoryFactory.get('pokemon')
  export default {
    name: 'pokedex',

    data: () => ({
      pokemon_id: 1,
      pokemon: null,
    }),
    methods:{
      async get_pokemon(){
        const { data } = await PokemonRepository.get_pokemon(this.pokemon_id)
        this.pokemon = data;
      }
    },
    mounted(){
      this.get_pokemon();
    }
  }
</script>
