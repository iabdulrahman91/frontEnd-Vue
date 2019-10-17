<template>
    <div>
        {{title}}
    </div>

</template>

<script>
    export default {
        name: "ProductLabel",
        props: ['item'],
        computed: {
            title(){
                return Object.values(this.item).reduce((a,b) => b+' '+a)
            }
        }
    }
</script>

<style scoped>

</style>