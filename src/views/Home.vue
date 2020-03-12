<template>
  <div class="home">
    <Pokedex />
  </div>
</template>

<script>
// @ is an alias to /src
import Pokedex from '@/components/pokedex.vue'

export default {
  name: 'Home',
  components: {
    Pokedex
  }
}
</script>
