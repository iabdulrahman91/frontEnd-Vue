<template>
    <v-layout row class="justify-center ma-1 align-center text-center justify-center justify-space-between">
        <v-flex xs12 class="ma-3 text-center" v-if="false">
            <v-label class="font-weight-light grey--text">Please tell user where</v-label>
        </v-flex>
        <v-flex xs12 sm6>
            <v-autocomplete
                    :items="Cities"
                    :search-input.sync="search"
                    v-model="location"
                    :item-value="id"
                    hide-details
                    label="Where is this item located"
                    class="mx-4"
                    flat
                    @input="setLocation"
            ></v-autocomplete>
        </v-flex>
        <v-flex xs12 sm6>
            <v-switch
                    class="justify-center"
                    v-model="delivery"
                    :value="delivery"
                    :label="delivery? `Yes, I can deliver this item`:`No, renter need to pick it up`"
                    color="blue"
                    @change="setDelivery"
            ></v-switch>
        </v-flex>
        <v-flex xs12 sm6>
            <v-text-field
                    class="mx-8"
                    type="number"
                    label="Price per day"
                    prepend-icon="mdi-cash"
                    suffix="SAR / Day"
                    :rules="priceRules"
                    v-model="price"
                    @input="setPrice"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>
            <vc-date-picker
                    class="ma-auto mt-5"
                    :attributes="attributes"
                    v-model="selection"
                    @input="selectedRange"
                    :min-date="today"
                    mode="range"
                    is-inline
            ></vc-date-picker>
            <v-btn @click="clearCalendar" color="danger" text>Clear</v-btn>
        </v-flex>

    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import DateRange from "@/HelperFunctions/DateRange";

    export default {
        name: "Details",
        data() {
            return {
                items: [],
                search: null,
                location: null,
                id: null,
                delivery: false,
                price: null,
                priceRules: [v => (/[0-9]+/.test(v) && v >= 0) || 'price must be 0 or higher'],
                today: new Date(),
                selection: null,
                attributes: [
                    {
                        highlight: true,
                        dates: []

                    }
                ],

            }
        },

        computed: {
            ...mapGetters(['Cities']),
            days() {
                return this.attributes[0].dates.map(a => {
                    let l = []
                    for (var d = new Date(a.start); d <= a.end; d.setDate(d.getDate() + 1)) {
                        l.push((d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear()));
                    }
                    return l
                }).flat()
            }

        },
        methods: {
            setPrice(){
                this.$emit('setPrice', this.price)
            },
            setLocation(){
              this.$emit('setLocation', this.Cities.indexOf(this.location)+1)
            },
            setDelivery(){
                this.$emit('setDelivery', this.delivery)
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

            async clearCalendar() {

                this.attributes = [
                    {
                        highlight: true,
                        dates: []

                    }
                ]
                setTimeout(() => this.selection = null, 100);
                this.$emit('setDays', this.days)
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
                this.$emit('setDays', this.days)
            },

        },
    }
</script>

<style scoped>

</style>