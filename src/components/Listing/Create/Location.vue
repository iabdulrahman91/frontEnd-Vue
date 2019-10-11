<template>
    <v-autocomplete
            :items="Cities"
            v-model="location"
            hide-details
            label="Where is this item located"
            flat
            @change="setLocation()"
    ></v-autocomplete>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Location",
        props: ['selectionProp'],
        data() {
            return {
                location: null,
                id: null,
            }
        },
        methods: {
            setLocation() {
                this.id = (this.Cities.indexOf(this.location) + 1)
                this.$emit('Selected', this.id)
            },
        },

        computed: {
            ...mapGetters(['Cities']),
        },
        created(){
            this.location = this.Cities[this.selectionProp - 1]
        }
    }
</script>

<style scoped>

</style>