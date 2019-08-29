<template>
    <v-app-bar app >

                <Logo></Logo>
        <v-spacer></v-spacer>
                <Search></Search>
        <v-spacer></v-spacer>
                <Guest></Guest>

    </v-app-bar>
</template>

<script>
    import Search from "@/components/layout/Navbar/Search";
    import Guest from "@/components/layout/Navbar/Guest";
    import Logo from "@/components/layout/Navbar/Logo";
    export default {
        components: {
            Logo,
            Search,
            Guest,
        },
        name: "Navbar",

    };
</script>

<style scoped>

</style>