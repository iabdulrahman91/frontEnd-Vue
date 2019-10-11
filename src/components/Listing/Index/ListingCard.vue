<template>

    <v-layout row class="justify-space-around justify-center">
        <v-flex xs12 sm5 md3 lg2 xl2
                v-for="listing in allListings.data"
                :key="listing.id"
                class="mx-1 my-2"
        >
            <v-card>
                <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"


                >
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                            v-if="false"
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </v-img>

                <v-card-title>{{listing.item.product}} | {{listing.item.company}} | {{listing.item.category}}
                </v-card-title>

                <v-card-text>

                    <!--price-->
                    <div class="my-4 subtitle-1 black--text">
                        <v-chip color="primary">{{listing.price}} SAR/day</v-chip>
                    </div>

                    <!--location-->
                    <div class="my-4 subtitle-1 black--text" v-if="listing.location!==null">
                        <v-chip color="primary">
                            {{listing.location.name_ar}} -
                            {{listing.location.name_en}}
                        </v-chip>
                    </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <!--days-->
                <!--                    <v-card-text>-->
                <!--                        <div class="title text&#45;&#45;primary">availability</div>-->
                <!--                        <v-chip-group column>-->
                <!--                            <v-chip v-for="(k,v) in listing.days" :key="v">{{v}}</v-chip>-->
                <!--                        </v-chip-group>-->
                <!--                    </v-card-text>-->

                <!--            more info-->
                <v-card-actions class="justify-center">

                    <router-link :to="'listings/' + listing.id">
                        <v-btn
                                color="primary accent-4"
                        >Show me
                        </v-btn>
                    </router-link>

                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    <!--        <v-row>-->
    <!--            <v-col-->
    <!--                    v-for="listing in allListings.data"-->
    <!--                    :key="listing.id"-->
    <!--            >-->
    <!--                -->
    <!--            </v-col>-->

    <!--        </v-row>-->

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ListingCard",
        computed: {
            ...mapGetters(["allListings"]),
        },
        methods: {
            async city(id) {
                return id
            }
        }
    }
</script>

<style scoped>

</style>