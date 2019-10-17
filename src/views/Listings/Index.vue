<template>
    <div v-if="!Loading">
        <ListingCard/>
        <Pagination v-if="allListings.data !== null && allListings.data.length>0"/>
    </div>

</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import ListingCard from "@/components/Listing/Index/ListingCard";
    import Pagination from "@/components/Listing/Index/Pagination";

    export default {
        name: "Index",
        components: {
            ListingCard,
            Pagination,
        },
        methods: {
            ...mapActions(["fetchListings"]),
        },
        computed: mapGetters(["Loading", "allListings"]),
        created() {
            this.fetchListings();
        },

    };

</script>

<style scoped>

</style>