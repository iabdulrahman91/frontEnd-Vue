<template>
    <v-layout row class="justify-center">

        <!--type section-->
        <v-flex xs12 class="mx-12 mt-5">
            <v-layout row class="justify-center" v-if="selectedType === ''">
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
            <v-layout row class="justify-center justify-space-around" v-else>
                <v-flex sm12 md6>
                    <v-card class="px-8">
                        <v-row class="align-content-center justify-center">
                            <v-col class="text-center">
                                <v-card-title>
                                    {{selectedType}}
                                </v-card-title>
                            </v-col>
                            <v-col class="text-right">
                                <v-btn color="red" fab icon text large @click="setSelected('type','')">
                                    <v-icon large>mdi-close-circle</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>

        <!--company section-->
        <v-flex xs12 class="mx-12 mt-5" v-if="selectedType!==''">
            <v-layout row class="justify-center" v-if="selectedCompany === ''">
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
            <v-layout row class="justify-center justify-space-around" v-else>
                <v-flex sm12 md6>
                    <v-card class="px-8">
                        <v-row class="align-content-center justify-center">
                            <v-col class="text-center">
                                <v-card-title>
                                    {{selectedCompany}}
                                </v-card-title>
                            </v-col>
                            <v-col class="text-right">
                                <v-btn color="red" fab icon text large @click="setSelected('company','')">
                                    <v-icon large>mdi-close-circle</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-flex>

        <!--models section-->
        <v-flex xs12 class="mx-12 mt-5" v-if="selectedCompany !== ''">
            <v-layout row class="justify-center" v-if="selectedModel === ''">
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
                        v-for="model in models" :key="model"
                >
                    <v-card
                            :class=" (selectedModel===model) ? 'blue pa-4':' pa-4' "
                            :dark="(selectedModel===model)"
                            @click="setSelected('model', model)">

                        <v-card-title>{{model}}</v-card-title>
                    </v-card>

                </v-flex>

            </v-layout>
            <v-layout row class="justify-center justify-space-around" v-else>
                <v-flex sm12 md6>
                    <v-card class="px-8">
                        <v-row class="align-content-center justify-center">
                            <v-col class="text-center">
                                <v-card-title>
                                    {{selectedModel}}
                                </v-card-title>
                            </v-col>
                            <v-col class="text-right">
                                <v-btn color="red" fab icon text large @click="setSelected('model','')">
                                    <v-icon large>mdi-close-circle</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>

        <!--location section-->
        <v-flex xs12 class="mx-12 mt-5" v-if="selectedCompany !== ''">
            <v-layout row class="justify-center" v-if="selectedModel === ''">
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
                        v-for="model in models" :key="model"
                >
                    <v-card
                            :class=" (selectedModel===model) ? 'blue pa-4':' pa-4' "
                            :dark="(selectedModel===model)"
                            @click="setSelected('model', model)">

                        <v-card-title>{{model}}</v-card-title>
                    </v-card>

                </v-flex>

            </v-layout>
            <v-layout row class="justify-center justify-space-around" v-else>
                <v-flex sm12 md6>
                    <v-card class="px-8">
                        <v-row class="align-content-center justify-center">
                            <v-col class="text-center">
                                <v-card-title>
                                    {{selectedModel}}
                                </v-card-title>
                            </v-col>
                            <v-col class="text-right">
                                <v-btn color="red" fab icon text large @click="setSelected('model','')">
                                    <v-icon large>mdi-close-circle</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>

        <!--location section-->
        <v-flex xs12 class="mx-12 mt-5" v-if="selectedCompany !== ''">
            <v-layout row class="justify-center" v-if="selectedModel === ''">
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
                        v-for="model in models" :key="model"
                >
                    <v-card
                            :class=" (selectedModel===model) ? 'blue pa-4':' pa-4' "
                            :dark="(selectedModel===model)"
                            @click="setSelected('model', model)">

                        <v-card-title>{{model}}</v-card-title>
                    </v-card>

                </v-flex>

            </v-layout>
            <v-layout row class="justify-center justify-space-around" v-else>
                <v-flex sm12 md6>
                    <v-card class="px-8">
                        <v-row class="align-content-center justify-center">
                            <v-col class="text-center">
                                <v-card-title>
                                    {{selectedModel}}
                                </v-card-title>
                            </v-col>
                            <v-col class="text-right">
                                <v-btn color="red" fab icon text large @click="setSelected('model','')">
                                    <v-icon large>mdi-close-circle</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
        <!--dates section-->
        <v-flex xs12 sm6 md4 v-if="selectedModel !== ''">
            <v-layout row class="justify-center">
                <v-flex xs12 class="text-center mx-12 mt-5" >
                    <v-label>
                        Select Available days
                    </v-label>
                </v-flex>
                <v-flex xs12 class="mx-12 mt-5">
                    <vc-date-picker
                            ref="calendar"
                            class="ma-auto"
                            :attributes="attributes"
                            v-model="selection"
                            @input="selectedRange"
                            :min-date="today"
                            mode="range"
                            is-inline
                    >
                    </vc-date-picker>
                </v-flex>
                <v-flex xs6 class="mx-12 px-12 mt-2">
                    <v-btn color="red" block  @click="setSelected('date','')">
                        <v-icon large>mdi-close</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
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
                selectedType: 's',
                selectedCompany: 's',
                selectedModel: 's',
                today: new Date(),
                selection: null,
                attributes: [
                    {
                        highlight: true,
                        dates: []

                    }
                ]
            }
        },
        methods: {
            setSelected(att, val) {
                switch (att) {
                    case 'type':
                        this.selectedType = (val !== '') ? val : (this.selectedModel = '', this.selectedCompany = '', this.selectedType = '')
                        break
                    case 'company':
                        this.selectedCompany = (val !== '') ? val : (this.selectedModel = '', this.selectedCompany = '')
                        break
                    case 'model':
                        this.selectedModel = (val !== '') ? val : (this.selectedModel = '')
                        break
                    case 'date':
                        this.clearCalendar()
                        break

                }
            },
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

            async clearCalendar(){

                this.attributes = [
                    {
                        highlight: true,
                        dates: []

                    }
                ]
                setTimeout(() => this.selection = null, 100);
            },

            async addRange(b) {
                let removedDublicate = this.attributes[0].dates.filter(a => (a.start - b.start !== 0) && (a.end - b.end !== 0))
                if (removedDublicate.length === this.attributes[0].dates.length) {
                    removedDublicate.push(b)
                }
                removedDublicate.sort((a, b) => (a.start - b.start) ? (a.start - b.start) : ((a.end - b.end) ? (a.end - b.end) : 1))
                this.attributes[0].dates = removedDublicate

                const dr = DateRange;
                let newlist = dr.mergeRanges(this.attributes[0].dates)
                this.attributes[0].dates = newlist
                setTimeout(() => this.selection = null, 100);

            },
        },


    }
</script>

<style scoped>

</style>