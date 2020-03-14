<template>
  <v-app dark>
    <v-navigation-drawer dark app>

    </v-navigation-drawer>
    <v-bar-app dark app>
    </v-bar-app>
    <v-content dark>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
export default {
  name: 'App',

  

  data: () => ({
    //
  }),
};
</script>
