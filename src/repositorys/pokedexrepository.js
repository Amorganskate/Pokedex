import Repository from "./Repository";

const resource = "/pokedex";
export default {
    get_pokedex(){
        console.log(resource)
        return Repository.get(`${resource}/1/`);
    },
}