<template>
    <div>
        <h1>{{LID}}</h1>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: "Show",
        props: {
            'LID':null
        },

        methods: {
            ...mapActions(["fetchListing"]),

        },
        computed: {
            ...mapGetters(['Loading', 'Listing']),

        },
        created() {
            this.fetchListing(this.LID);
        },
    }
</script>

<style scoped>

</style>