<template>
    <v-row>
        <v-col xs12>
            <v-autocomplete @keyup.enter="search_pokemon()" :items="pokedex" item-text="pokemon_species.name" :loading="is_loading" label="Search..." v-model="search" clearable></v-autocomplete>
        </v-col>
    </v-row>
</template>
<script>
import { RepositoryFactory } from '@/repositorys/RepositoryFactory'
const PokemonRepository = RepositoryFactory.get('pokemon')
const PokedexRepository = RepositoryFactory.get('pokedex')
export default {
    data: () => ({
        search: '',
        is_loading: false,
        pokedex: [],
        pokemon: '',
    }),
    methods:{
        async search_pokemon(){
            const { data } = await PokemonRepository.get_pokemon_by_name(this.search.toLowerCase())
            this.pokemon_id = data.id;
            this.pokemon = data;
      },
      async get_pokedex() {
        this.is_loading = true;
        const { data } = await PokedexRepository.get_pokedex();
          
        this.pokedex = data.pokemon_entries;
        this.is_loading = false;
      }

    },
    mounted(){
        this.get_pokedex()
    }
};
</script>