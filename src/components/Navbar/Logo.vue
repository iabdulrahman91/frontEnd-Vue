<template>

        <v-toolbar-title class="headline text-uppercase" >
            <router-link to="/">
                <span class="font-weight-light grey--text">Share</span>
                <span class="font-weight-bold grey--text"> ek</span>
            </router-link >

        </v-toolbar-title>

</template>

<script>
    export default {
        name: "Logo",
        data: () => ({
            title: 'ShareeK',

        }),
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
</style>