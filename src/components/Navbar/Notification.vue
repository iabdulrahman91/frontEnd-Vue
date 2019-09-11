<template>
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
                <v-badge :overlap="true" class="align-self-center" color="red lighten-2" :value="true">
                    <template v-slot:badge>
                        <span>5</span>
                    </template>
                    <v-icon large>mdi-bell-outline</v-icon>
                </v-badge>

            </v-btn>

        </template>
        <v-card>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                        <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                    </v-list-item-content>

                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-list-item-action>
                        <v-switch  color="purple"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable messages</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                        <v-switch  color="purple"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable hints</v-list-item-title>
                </v-list-item>
            </v-list>

        </v-card>
    </v-menu>
</template>

<script>
    export default {
        name: "Notification",
        data () {
            return {
                value: false,
                closeOnClick: true,
                closeOnContentClick: true,
                offsetY: true,
            }
        }
    }
</script>

<style scoped>

</style>