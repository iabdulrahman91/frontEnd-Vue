<template>
    <div>
        <v-menu
                v-model="value"
                :offset-y="true"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                        v-on="on"
                        fab
                        icon

                >
                    <v-icon large>mdi-account-circle</v-icon>
                </v-btn>

            </template>
            <v-list class="px-1">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{(User.fname)}} {{User.lname}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="px-0">
                    <router-link to="/listings/create">
                        <v-btn text>
                            <v-icon left>mdi-plus</v-icon>
                            <span>New Listing</span>
                        </v-btn>
                    </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/profile">My Listing</router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/profile">Setting</router-link>
                </v-list-item>
                <v-divider/>
                <v-list-item class="px-0">
                    <v-btn block text @click="logout">Logout</v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: "User",
        computed: {
            ...mapGetters(['User']),
        },
        data () {
            return {
                disabled: false,
                absolute: false,
                openOnHover: false,
                value: false,
                closeOnClick: true,
                closeOnContentClick: true,
                offsetX: false,
                offsetY: true,
            }
        },
        methods: {
            ...mapActions(["logout"])
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
</style>