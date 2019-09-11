<template>
    <v-app-bar app>
        <v-layout class="justify-space-between align-center">
            <v-flex xs6 sm3 md2>
                <Logo></Logo>
            </v-flex>
            <v-flex md6 class="d-none d-sm-block">
                <Search></Search>
            </v-flex>
            <v-flex xs6 sm3 md2>
                <v-layout v-if="User !== null" class="justify-end align-center">
                    <v-flex xs4 md3>
                        <Notification/>
                    </v-flex>
                    <v-flex xs4 md3>
                        <User/>
                    </v-flex>
                </v-layout>
                <v-layout v-else class="justify-end">
                    <v-flex xs6>
                        <Login/>
                    </v-flex>
                </v-layout>


            </v-flex>

        </v-layout>
    </v-app-bar>
</template>

<script>
    import Search from "@/components/Navbar/Search";
    import Login from "@/components/Auth/Login";
    import Logo from "@/components/Navbar/Logo";
    import User from "@/components/Navbar/User";
    import Notification from "@/components/Navbar/Notification";
    import {mapGetters} from 'vuex'

    export default {
        components: {
            Logo,
            Search,
            Login,
            User,
            Notification,

        },
        name: "Navbar",
        computed: mapGetters(["User"])

    };
</script>

<style scoped>

</style>