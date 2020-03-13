import Repository from "./Repository";

const resource = "/pokemon";
export default {
    get_pokemon(id){
        return Repository.get(`${resource}/${id}`);
    },
    get_species(id){
        return Repository.get(`${resource}-species/${id}`);
    }
}