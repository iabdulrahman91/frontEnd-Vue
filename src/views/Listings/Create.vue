<template>
    <v-layout row class="justify-center">

        <!--type section-->
        <v-flex xs12 class="mx-12" v-if="false">
            <v-layout row class="justify-center">
                <v-flex xs12 class="ma-3 text-center">
                    <v-layout row class="justify-center justify-space-between">
                        <v-flex xs4 sm5>
                            <v-divider class="ma-3"></v-divider>
                        </v-flex>
                        <v-flex xs3 sm2>
                            <span class="font-weight-light grey--text">Select Type</span>
                        </v-flex>
                        <v-flex xs4 sm5>
                            <v-divider class="ma-3"></v-divider>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex
                        xs6 sm4 md2
                        class="pa-2"
                        v-for="(link, type) in types" :key="type"
                >
                    <v-card
                            :class=" (selectedType===type) ? 'blue pa-5':' pa-4' "
                            @click="setSelected('type',type)">

                        <v-img
                                :src="link"
                        />
                    </v-card>

                </v-flex>

            </v-layout>
        </v-flex>

        <!--company section-->
        <v-flex xs12 class="px-12">
            <v-layout row class="justify-center" v-if="selectedType!==''">
                <v-flex xs12 class="ma-3 text-center">
                    <v-layout row class="justify-center justify-space-between">
                        <v-flex xs4 sm5>
                            <v-divider class="ma-3"></v-divider>
                        </v-flex>
                        <v-flex xs3 sm2>
                            <span class="font-weight-light grey--text">Select Company</span>
                        </v-flex>
                        <v-flex xs4 sm5>
                            <v-divider class="ma-3"></v-divider>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex
                        xs6 sm4 md2
                        class="pa-2"
                        v-for="company in companies" :key="company">
                    <v-card
                            :class=" (selectedCompany===company) ? 'blue pa-4':' pa-4' "
                            :dark="(selectedCompany===company)"
                            @click="setSelected('company', company)">

                        <v-card-title>{{company}}</v-card-title>
                    </v-card>

                </v-flex>

            </v-layout>


        </v-flex>

        <!--models section-->
        <v-flex xs12 class="px-12" v-if="selectedCompany !== ''">
            <v-layout row class="justify-center">
                <v-flex xs12 class="ma-3 text-center">
                    <v-layout row class="justify-center justify-space-between">
                        <v-flex xs4 sm5>
                            <v-divider class="ma-3"></v-divider>
                        </v-flex>
                        <v-flex xs3 sm2>
                            <span class="font-weight-light grey--text">Select Model</span>
                        </v-flex>
                        <v-flex xs4 sm5>
                            <v-divider class="ma-3"></v-divider>
                        </v-flex>
                    </v-layout>
                </v-flex>

                <v-flex
                        xs6 sm4 md2
                        class="pa-2"
                        v-for="model in models" :key="model">
                    <v-card
                            :class=" (selectedModel===model) ? 'blue pa-4':' pa-4' "
                            :dark="(selectedModel===model)"
                            @click="setSelected('model', model)">

                        <v-card-title>{{model}}</v-card-title>
                    </v-card>

                </v-flex>

            </v-layout>
        </v-flex>

        <v-flex xs12 class="px-12 justify-space-around">
            <vc-date-picker
                    :attributes="attributes"
                    v-model="selection"
                    @input="selectedRange"
                    :min-date="null"
                    mode="range"
                    is-inline
            ></vc-date-picker>
        </v-flex>
    </v-layout>

</template>

<script>
    import DateRange from "@/HelperFunctions/DateRange";

    export default {
        name: "Create",
        data() {
            return {
                types: {
                    'Body': require('@/assets/typesImgs/body.png'),
                    'Drone': require('@/assets/typesImgs/drone.png'),
                    'Battery': require('@/assets/typesImgs/battery.png'),
                    'Flash': require('@/assets/typesImgs/flash.png'),
                    'lens': require('@/assets/typesImgs/lens.png'),
                    'Memory': require('@/assets/typesImgs/memory.png')
                },
                companies: [
                    'Cannon', 'Nikkon', 'Sony', 'fujifilm', 'Samsung', 'Kodak', 'Olympic'
                ],
                models: [
                    'D33', 'D40', 'D1000', 'D9809', 'D09898', 'C535'
                ],
                selectedType: '',
                selectedCompany: '',
                selectedModel: '',
                // today: new Date(),
                // tomorrow: new Date().setDate(this.today.getDate()+1),
                selection: null,
                ranges: [],
                attributes: [
                    {
                        highlight: true,
                        dates: []

                    }
                ]
            }
        },
        methods: {
            selectedRange(val) {
                if (val !== null) {
                    if (val.start - val.end !== 0) {
                        this.addRange(val)
                    } else {
                        let d = new Date()
                        d.setDate(val.start.getDate() + 1)
                        this.addRange({start: val.start, end: d})
                    }
                }
            },
            async update() {
                setTimeout(() => this.selection = null, 100);
            },


            addRange(b) {
                let removedDublicate = this.attributes[0].dates.filter(a => (a.start - b.start !== 0) && (a.end - b.end !== 0))
                if (removedDublicate.length === this.attributes[0].dates.length) {
                    removedDublicate.push(b)
                }
                removedDublicate.sort((a, b) => (a.start - b.start) ? (a.start - b.start) : ((a.end - b.end) ? (a.end - b.end) : 1))
                this.attributes[0].dates = removedDublicate

                const dr = DateRange;
                let newlist = dr.mergeRanges(this.attributes[0].dates)
                this.attributes[0].dates = newlist
                this.update()


            },
        },


    }
</script>

<style scoped>

</style>