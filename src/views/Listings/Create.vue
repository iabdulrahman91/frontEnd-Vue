<template>
    <v-layout row class="justify-center justify-space-around align-content-space-between ma-1">
        <!--Progress bar-->
        <v-flex xs12 sm10 md8 class="mx-4 mt-3">
            <v-progress-linear
                    :active="true"
                    :value="stage"
                    height="3"

            />
        </v-flex>
        <!--question section-->
        <v-flex xs12 sm10 md8 class="ma-2">
            <Types v-if="currentStep === 0" :selectionProp="type" @Selected="type = $event"/>
            <Companies v-if="currentStep === 1" :selectionProp="company" @Selected="company = $event"/>
            <Models v-if="currentStep === 2" :selectionProp="model" @Selected="model = $event"/>
            <Details v-if="currentStep === 3"
                     @setLocation="location = $event"
                     @setDelivery="delivery = $event"
                     @setPrice="price = $event"
                     @setDays="days = $event"
            />
        </v-flex>
        <v-flex xs12 sm10 md8 class="mx-2">
            <!--Action-->
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
                </v-flex>


            </v-layout>

        </v-flex>

    </v-layout>

</template>

<script>
    import {mapActions} from 'vuex';
    import Types from "@/components/Listing/Types";
    import Companies from "@/components/Listing/Companies";
    import Models from "@/components/Listing/Models";
    import Details from "@/components/Listing/Details";

    export default {
        name: "Create",
        created(){
          this.fetchCities()
        },
        data() {
            return {
                currentStep: 0,
                steps: ['type', 'company', 'model', 'detail'],
                type: null,
                company: null,
                model: null,
                location: null,
                delivery: false,
                price: null,
                days: null,
            }
        },
        computed: {
            isLast(){
                return(this.currentStep === this.steps.length-1)
            },
            stage() {
                return ((this.currentStep+((this.stepCompleted&&this.hasNext)? 1:0)) / this.steps.length) * 100
            },


            hasNext() {
                return (this.currentStep < this.steps.length-1 && this.stepCompleted)
            },
            hasBack() {
                return this.currentStep > 0
            },
            stepCompleted(){
              switch (this.currentStep) {
                  case 0:
                      return this.type!==null;
                  case 1:
                      return this.company!==null;
                  case 2:
                      return this.model!==null;
                  case 3:
                      return (this.days!==null && this.days.length>0 && this.location !== null && this.price!==null && this.price >=0);
                  default:
                      return true
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
        watch: {
            selectedType: function() {
                this.company = ''
            },
            selectedCompany: function () {
                this.model = ''
            },
        },
        components: {
            Types,
            Companies,
            Models,
            Details,
        }
    }
</script>

<style scoped>

</style>