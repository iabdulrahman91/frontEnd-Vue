<template>
  <v-app>
<!--    This is the Navbar-->
    <Navbar></Navbar>
<!--    This is the body of the page -->

      <router-view/>

  </v-app>
</template>

<script>

import Navbar from "@/components/layout/Navbar/Navbar";

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Navbar,
  },
};
</script>
