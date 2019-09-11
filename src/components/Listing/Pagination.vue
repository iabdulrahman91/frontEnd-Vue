<template>
    <div class="text-center">
        <v-pagination
                v-model="allListings.meta.current_page"
                :length="allListings.meta.last_page"
                circle
                @input="next"
        ></v-pagination>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    export default {
        name: "Pagination",
        computed: mapGetters(["allListings"]),

        methods: {
            ...mapActions(["fetchListings"]),
            next(page) {
                this.fetchListings(page);
            },
        },


    }
</script>

<style scoped>

</style>