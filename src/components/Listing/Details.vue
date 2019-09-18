<template>
    <v-layout row class="justify-center ma-1">
        <v-flex xs12 class="ma-3 text-center">
            <v-label class="font-weight-light grey--text">Please tell user where</v-label>
        </v-flex>
        <v-flex xs12>
            <v-toolbar
                    dark
                    color="teal"
            >
                <v-toolbar-title>State selection</v-toolbar-title>
                <v-autocomplete
                        :loading="loading"
                        :items="cities"
                        :search-input.sync="search"
                        cache-items
                        class="mx-4"
                        flat
                        hide-no-data
                        hide-details
                        label="What state are you from?"
                        solo-inverted
                ></v-autocomplete>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar>
        </v-flex>


    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Details",
        data () {
            return {
                loading: false,
                items: [],
                search: null,
                select: null,
            }
        },

        computed: {
            ...mapGetters(['Cities']),
            cities() {
                return this.Cities.data.map(e => {
                    return e.name
                })
            }
        },
        methods: {

        },
    }
</script>

<style scoped>

</style>