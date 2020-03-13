<template>
  <v-container class="text-center justify-center">
    <v-card min-width="200" max-width="600" v-if="pokemon != null">
      <v-btn v-if="pokemon_id != 1" color="primary" @click="pokemon_id = pokemon_id - 1; get_pokemon()">-</v-btn>
      <v-list-item-content>
              <v-list-item-title class="title">{{pokemon.name}}</v-list-item-title>
              <v-list-item-subtitle>Pokedex ID: {{pokemon.id}}</v-list-item-subtitle>
      </v-list-item-content>
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
      species: null,
    }),
    methods:{
      async get_pokemon(){
        const { data } = await PokemonRepository.get_pokemon(this.pokemon_id)
        this.pokemon = data;
      },
      async get_species(){
        const { data } = await PokemonRepository.get_species(this.pokemon_id)
        this.species = data;
      }
    },
    mounted(){
      this.get_pokemon();
      this.get_species();
    }
  }
</script>
