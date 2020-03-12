import PokemonRepository from './pokemonRepository';

const repositories = {
    pokemon: PokemonRepository,
};

export const RepositoryFactory ={
    get: name => repositories[name]
}