<template>
    <v-layout row class="justify-center ma-1">

        <v-flex xs12 sm3 class="ma-2">
            <v-card>
                <v-card-text>
                    {{this.selectionProp.type}}
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 sm3 class="ma-2">
            <v-card>
                <v-card-text>
                    {{this.selectionProp.company}}
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 sm4 class="ma-2">
            <v-card>
                <v-card-text>
                    {{this.selectionProp.model}}
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 sm5 class="ma-2">
            <v-card :loading="LoadingLocation">

                <v-card-text v-if="City!==null">
                    <v-icon left color="blue">mdi-map-marker-radius</v-icon>
                    {{this.City.name}}
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 sm4 class="ma-2">
            <v-card>
                <v-card-text>
                    <v-icon left :color="(this.selectionProp.delivery)? 'green lighten-2':'red lighten-2'">mdi-truck</v-icon>
                    {{this.selectionProp.delivery? `I can deliver this item`:`Renter need to pick it up this item`}}
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 sm3 class="ma-2">
            <v-card>
                <v-card-text>
                    <v-icon left>mdi-cash-multiple</v-icon>
                    {{this.selectionProp.price}} SAR per a Day
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 class="ma-2">
            <vc-date-picker
                    class="ma-auto"
                    mode="range"
                    :value="null"
                    :attributes="this.selectionProp.attributes"
                    color="green"
                    is-inline
                    :disabled-dates="{}"
                    :min-date="this.dates[0].start"
                    :max-date="this.dates[dates.length-1].end"
            ></vc-date-picker>
        </v-flex>
        <v-flex xs12 sm4 class="mx-5 my-1">
            <v-btn color="primary" block @click="$emit('Post')">
                <v-icon left>mdi-checkbox-marked-circle-outline</v-icon>
                Post
            </v-btn>
        </v-flex>
        <v-flex xs12 sm4 class="mx-5 my-1">
            <v-btn color="red lighten-2" outlined block>
                <v-icon left>mdi-checkbox-marked-circle-outline</v-icon>
                Cancel
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>  /* eslint-disable */
import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Review",
        props: ['selectionProp'],
        data(){
            return{
                dates: null,
            }
        },
        methods: {
            ...mapActions(['fetchCity']),

        },
        computed: {
            ...mapGetters(['City', 'LoadingLocation'])
        },
        created(){
            this.fetchCity(this.selectionProp.location)
            this.dates = this.selectionProp.attributes[0].dates
        }
    }
</script>

<style scoped>

</style>