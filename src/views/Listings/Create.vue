<template>
    <v-layout row class="justify-center justify-space-around align-content-space-between ma-1">
        <!--Progress bar-->
        <v-flex xs12 sm10 md8 class="mx-4 mt-5">
            <v-progress-linear
                    :active="hasBack"
                    :value="stage"
                    height="12"

            />
        </v-flex>
        <!--question section-->
        <v-flex xs12 sm10 md8 class="ma-2">
            <Types v-if="currentStep === 0" :selectionProp="selectedType" @Selected="selectedType = $event"/>
            <Companies v-if="currentStep === 1" :selectionProp="selectedCompany" @Selected="selectedCompany = $event"/>
            <Models v-if="currentStep === 2" :selectionProp="selectedModel" @Selected="selectedModel = $event"/>
            <Details v-if="currentStep === 3"/>
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
                steps: ['type', 'company', 'model', 'detail', 'confirm'],
                selectedType: '',
                selectedCompany: '',
                selectedModel: '',
            }
        },
        computed: {
            stage: function () {
                return ((this.currentStep) / this.steps.length) * 100
            },


            hasNext: function () {
                return this.currentStep < this.steps.length
            },
            hasBack: function () {
                return this.currentStep > 0
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
                this.selectedCompany = ''
            },
            selectedCompany: function () {
                this.selectedModel = ''
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