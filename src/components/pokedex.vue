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
  export default {
    name: 'pokedex',

    data: () => ({
      pokemon_id: 1,
      pokemon: null,
    }),
    methods:{
      get_pokemon(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemon_id}/`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.pokemon = data;
          })
      }
    },
    mounted(){
      this.get_pokemon();
    }
  }
</script>
