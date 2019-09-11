<template>
    <v-app>
        <!--    This is the Navbar-->
        <Navbar></Navbar>
        <!--    This is the body of the page -->
        <v-content>
            <router-view/>
        </v-content>

    </v-app>
</template>

<script>

    import Navbar from "@/components/Navbar/Navbar";
    import { mapActions} from 'vuex';

    export default {
        name: 'App',
        data: () => ({
            //
        }),
        components: {
            Navbar,
        },
        methods: {
            ...mapActions(['details'])
        },

        created() {
            if (localStorage.getItem('token') !== null) {
                this.details();
            }
        }
    };
</script>
