<template>
    <div>
        <v-layout row class="justify-center ma-1">
            <v-flex xs12 class="ma-3 text-center">
                <v-label class="font-weight-light grey--text">{{message}}</v-label>
            </v-flex>
            <v-flex xs12>
                <v-layout row class="justify-center">
                    <v-flex
                            xs6 sm4
                            class="pa-2"
                            v-for="option in options" :key="option"
                    >
                        <v-card
                                :class="((selection===option) ? 'blue ':'') + 'pa-4'"
                                @click="setSelected(option)">
                            <v-card-title>
                                {{option}}
                            </v-card-title>
                        </v-card>

                    </v-flex>
                </v-layout>
            </v-flex>


        </v-layout>

    </div>

</template>

<script>
    export default {
        name: "Companies",
        props: ['selectionProp'],
        data() {
            return {
                options: null,
                selection: '',
            }
        },
        computed: {
            message: function () {
                return (this.selection === '') ? 'Please Select Company' : 'You have selected'
            }
        },
        methods: {
            setSelected(val) {
                this.selection = (val !== '') ? val : (this.selection = '')
                this.$emit('Selected', this.selection)
            },
        },
        created(){
            this.selection = this.selectionProp
            this.options = ['Cannon', 'Nikkon', 'Sony', 'fujifilm', 'Samsung', 'Kodak', 'Olympic',]
        }

    }
</script>

<style scoped>

</style>