import PokemonRepository from './pokemonRepository';
import pokedexrepository from './pokedexrepository';

const repositories = {
    pokemon: PokemonRepository,
    pokedex: pokedexrepository
};

export const RepositoryFactory ={
    get: name => repositories[name]
}