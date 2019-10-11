<template>
    <v-text-field
            type="number"
            label="Price per day"
            prepend-icon="mdi-cash"
            suffix="SAR / Day"
            :rules="priceRules"
            v-model="selection"
            @change="setPrice"
    ></v-text-field>
</template>

<script>
    export default {
        name: "Price",
        props: ['selectionProp'],
        data() {
            return {
                selection : '',
                error: false,
                priceRules: [v => (/[0-9]+/.test(v) && v >= 0) || 'price must be 0 or higher'],
            }
        },
        methods: {
            setPrice() {

                this.$emit('Selected', this.selection)
            },
        },
        created(){
            this.selection = this.selectionProp
        }
    }
</script>

<style scoped>

</style>