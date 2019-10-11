<template>
    <v-layout row class="justify-center justify-space-around align-content-space-between ma-1">
        <!--Progress bar-->
        <v-flex xs12 sm10 md8 v-if="currentStep<steps.length" class="mx-4 mt-3">
            <v-progress-linear
                    :active="true"
                    :value="stage"
                    height="3"
                    :color="(stepCompleted && !hasNext)? 'green':'blue'"

            />
        </v-flex>
        <!--question section-->
        <v-flex xs12 sm10 md8 class="ma-2 mt-0">
            <Category v-if="currentStep === 0" :selectionProp="category" @Selected="category = $event"/>
            <Type v-if="currentStep === 1" :selectionProp="type" @Selected="type = $event"/>
            <Company v-if="currentStep === 2" :selectionProp="company" @Selected="company = $event"/>
            <Model v-if="currentStep === 3" :selectionProp="model" @Selected="model = $event"/>
            <v-layout v-if="currentStep === 4"
                      row class="justify-center ma-1 align-center text-center justify-center justify-space-between">
                <v-flex xs12 sm6>
                    <v-layout row class="justify-space-between">
                        <v-flex xs12 class="ma-5">
                            <Location :selectionProp="location" @Selected="location = $event"/>
                        </v-flex>
                        <v-flex xs12>
                            <v-switch
                                    class="justify-center ma-5"
                                    v-model="delivery"
                                    :label="delivery? `Yes, I can deliver this item`:`No, renter need to pick it up`"
                                    color="blue"
                            ></v-switch>
                        </v-flex>
                        <v-flex xs12 class="ma-5 mb-0">
                            <Price :selectionProp="price" @Selected="price = $event"/>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm6>
                    <Day :selectionProp="attributes" @Selected="attributes = $event"/>
                </v-flex>
            </v-layout>
            <Review v-if="currentStep>=steps.length" :selectionProp="inputs"/>
        </v-flex>

        <!--Actions section-->
        <v-flex xs12 sm10 md8 class="mx-2">
            <!--Action Next/Back-->
            <v-layout class="justify-space-between">
                <v-flex xs3 class="text-left">
                    <!--Back-->
                    <v-fab-transition>
                        <v-btn
                                v-show="hasBack"
                                color="blue"
                                dark
                                bottom
                                left
                                fixed
                                fab
                                large
                                @click="back"
                                class="ma-sm-12"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </v-fab-transition>
                </v-flex>
                <v-flex xs3 class="text-right">
                    <!--Next-->
                    <v-fab-transition>
                        <v-btn
                                v-show="hasNext"
                                color="blue"
                                dark
                                bottom
                                right
                                fixed
                                fab
                                large
                                @click="next"
                                class="ma-sm-12"

                        >
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-fab-transition>
                    <v-fab-transition v-if="isLast">
                        <v-btn
                                v-show="stepCompleted"
                                color="green"
                                dark
                                bottom
                                right
                                fixed
                                fab
                                large
                                @click="next"
                                class="ma-sm-12"

                        >
                            <v-icon>mdi-flag-checkered</v-icon>
                        </v-btn>
                    </v-fab-transition>
                </v-flex>


            </v-layout>

        </v-flex>

    </v-layout>

</template>

<script>
    import {mapActions} from 'vuex';
    import Category from "@/components/Listing/Create/Category";
    import Type from "@/components/Listing/Create/Type";
    import Company from "@/components/Listing/Create/Company";
    import Model from "@/components/Listing/Create/Model";
    import Location from "@/components/Listing/Create/Location";
    import Price from "@/components/Listing/Create/Price";
    import Day from "@/components/Listing/Create/Day";
    import Review from "@/components/Listing/Create/Review";

    export default {
        name: "Create",
        created() {
            this.fetchCities()
        },
        data() {
            return {
                currentStep: 4,
                steps: ['category', 'type', 'company', 'model', 'detail'],
                type: null,
                category: null,
                company: null,
                model: null,
                location: null,
                delivery: false,
                price: null,
                attributes: [{highlight: true, dates: []}],
            }
        },
        computed: {
            isLast() {
                return (this.currentStep === this.steps.length - 1)
            },
            stage() {
                return ((this.currentStep + ((this.stepCompleted) ? 1 : 0)) / this.steps.length) * 100
            },


            hasNext() {
                return (this.currentStep < this.steps.length - 1 && this.stepCompleted)
            },
            hasBack() {
                return this.currentStep > 0
            },
            stepCompleted() {
                switch (this.currentStep) {
                    case 0:
                        return this.category !== null;
                    case 1:
                        return this.type !== null;
                    case 2:
                        return this.company !== null;
                    case 3:
                        return this.model !== null;
                    case 4:

                        return (this.attributes[0].dates !== null && this.attributes[0].dates.length > 0 && this.location !== null && this.price !== null && this.price >= 0);
                    default:
                        return true
                }
            },
            inputs() {
                return {
                    type: this.type,
                    category: this.category,
                    company: this.company,
                    model: this.model,
                    location: this.location,
                    delivery: this.delivery,
                    price: this.price,
                    attributes: this.attributes,

                }

            }
        },
        methods: {
            ...mapActions(["fetchCities"]),
            next() {
                this.currentStep = (this.hasNext) ? this.currentStep + 1 : this.steps.length
            },
            back() {
                this.currentStep = (this.hasBack) ? this.currentStep - 1 : 0
            },
        },

        components: {
            Type,
            Category,
            Company,
            Model,
            Location,
            Price,
            Day,
            Review,
        }
    }
</script>

<style scoped>

</style>