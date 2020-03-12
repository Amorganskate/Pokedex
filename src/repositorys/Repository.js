import axios from 'axios'

const baseDomain = "http://pokeapi.co";
const baseURL = `${baseDomain}/api/v2/`

export default axios.create({
    baseURL,
    // In Case we every need heads 
    // headers: ["": "Bearer "]
})