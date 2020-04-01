<template>
  <v-app>
    <v-navigation-drawer app>

    </v-navigation-drawer>
    <v-bar-app app>
      
    </v-bar-app>
    <v-content>
      <search class="ma-3"></search>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
import search from '@/components/pokemon_search'
export default {
  name: 'App',
  components:{
    search
  },

  

  data: () => ({
    
  }),
  methods:{
    
  }
};
</script>
