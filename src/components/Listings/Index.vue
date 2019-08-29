<template>
    <div class="">
        <span>
            {{listings}}
        </span>
    </div>

</template>

<script>

    export default {
        name: "Index",

        mounted () {
            this.$http
                .get('/listings')
                .then(response => (this.listings = response))
        },
        data: () => ({
            listings: '' ,
        })
    };

</script>

<style scoped>

</style>