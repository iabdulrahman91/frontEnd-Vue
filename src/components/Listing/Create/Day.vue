<template>
    <div>
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
    </div>
</template>

<script>
    import DateRange from "@/HelperFunctions/DateRange";
    export default {
        name: "Days",
        props: ['selectionProp'],
        data() {
          return {
              today: new Date(),
              selection: null,
              highlight: true,
              attributes: [
                  {
                      highlight: true,
                      dates: []

                  }
              ],
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
                this.$emit('Selected', this.attributes)
            },

            async clearCalendar() {

                this.attributes = [{highlight: true, dates: []}]
                setTimeout(() => this.selection = null, 100);
                this.$emit('Selected', this.attributes)
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
        created(){
            this.attributes = this.selectionProp
        }
    }
</script>

<style scoped>

</style>