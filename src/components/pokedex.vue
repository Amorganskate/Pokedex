<template>
  <v-container class="text-center justify-center">
    
    <v-card v-if="pokemon != null">
      
      <v-list-item-content>
              <v-list-item-title class="title">{{pokemon.name}}</v-list-item-title>
              <v-list-item-subtitle>Pokedex ID: {{pokemon.id}}</v-list-item-subtitle>
      </v-list-item-content>
      <a class="text_arrows" v-if="pokemon_id != 1" color="white" @click="pokemon_id = pokemon_id - 1; get_pokemon()">&#8592;</a>
      <v-avatar size="400">
        <img v-bind:src="pokemon.sprites.front_default">
      </v-avatar>
      <a class="text_arrows" color="white"  @click="pokemon_id = pokemon_id + 1; get_pokemon()">&rarr;</a>
    </v-card>
    
  </v-container>
</template>

<script>
import { RepositoryFactory } from '@/repositorys/RepositoryFactory'
const PokemonRepository = RepositoryFactory.get('pokemon')
  export default {
    props: ["new_pokemon"],
    name: 'pokedex',

    data: () => ({
      pokemon_id: 1,
      pokemon: null,
      species: null,
      search: '',
      
    }),
    watch:{
        pokemon(){
          this.pokemon = this.new_pokemon;
        }
    },
    methods:{
      async get_pokemon(){
        const { data } = await PokemonRepository.get_pokemon(this.pokemon_id)
        this.pokemon = data;
      },
      async get_species(){
        const { data } = await PokemonRepository.get_species(this.pokemon_id)
        this.species = data;
      },
      
    },
    mounted(){
      this.get_pokemon();
      this.get_species();
      console.log(this.pokemon);
    }
  }
</script>

<style  scoped>
.text_arrows{
  font-size:50px;
  color:white;
}
</style>
