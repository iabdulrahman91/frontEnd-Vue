<template>
    <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" depressed>Login</v-btn>
        </template>
        <v-card>
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Authentication</v-toolbar-title>
                <v-spacer/>
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text>
                <!--Login Fields-->
                <v-form
                        class="my-2"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                >
                    <v-label>
                        <span class="font-weight-light grey--text">Welcome back </span>
                    </v-label>
                    <v-text-field
                            label="Email"
                            v-model="email"
                            :rules="emailRules"
                            prepend-icon="email"
                    />
                    <v-text-field
                            label="Password"
                            v-model="password"
                            :rules="passwordRules"
                            prepend-icon="lock"
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'visibility' : 'visibility_off'"
                            @click:append="show = !show"

                    />
                    <v-label v-if="AuthErrors !==null && AuthErrors.message !==null">
                        <span class="error--text">Failed to Authenticate</span>
                    </v-label>
                </v-form>
                <!--Login Actions-->
                <v-layout justify-space-around>
                    <v-flex xs6>
                        <v-btn color="primary" block @click="prepareLogin" depressed :loading="LoadingUser">Login</v-btn>
                    </v-flex>
                </v-layout>

                <v-divider class="ma-6"/>

                <!--Registration Fields-->
                <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        class="px-3">
                    <v-label>
                        <span class="font-weight-light grey--text">New Registration</span>
                    </v-label>
                    <v-layout wrap row justify-space-between>
                        <!--fname-->
                        <v-flex xs12 sm6>
                            <v-text-field
                                    label="First Name"
                                    class="mx-2"
                                    prepend-icon="person"
                                    v-model="fname"
                                    :error="AuthErrors !==null && AuthErrors.fname !==null"
                            />
                        </v-flex>

                        <!--lname-->
                        <v-flex xs12 sm6>
                            <v-text-field
                                    label="Last Name"
                                    class="mx-2"
                                    prepend-icon="people"
                                    v-model="lname"
                                    :error="AuthErrors !==null && AuthErrors.lname !==null"
                            />
                        </v-flex>

                        <!--email-->
                        <v-flex xs12 sm6>
                            <v-text-field
                                    label="Email"
                                    class="mx-2"
                                    prepend-icon="email"
                                    v-model="newEmail"
                                    :rules="emailRules"
                                    :error="AuthErrors !==null && AuthErrors.email !==null"
                            />
                        </v-flex>

                        <!--phone-->
                        <v-flex xs12 sm6>
                            <v-text-field
                                    label="Phone"
                                    placeholder="05xxxxxxxx"
                                    class="mx-2"
                                    prepend-icon="phone"
                                    v-model="phone"
                                    :error="AuthErrors !==null && AuthErrors.phone !==null"
                            />
                        </v-flex>

                        <!--password-->
                        <v-flex xs12 sm6>
                            <v-text-field
                                    label="New Password"
                                    class="mx-2"
                                    prepend-icon="lock"
                                    v-model="newPassword"
                                    :type="show ? 'text' : 'password'"
                                    :append-icon="show ? 'visibility' : 'visibility_off'"
                                    @click:append="show = !show"
                                    :error="AuthErrors !==null && AuthErrors.password !==null"
                            />
                        </v-flex>
                        <!--c_password-->
                        <v-flex xs12 sm6>
                            <v-text-field
                                    label="Password Confirmation"
                                    class="mx-2"
                                    prepend-icon="lock"
                                    v-model="newPassword_c"
                                    :type="show ? 'text' : 'password'"
                                    :error="AuthErrors !==null && AuthErrors.c_password !==null"

                            />
                        </v-flex>

                    </v-layout>


                </v-form>
                <!--Registration Actions-->
                <v-layout justify-space-around>
                    <v-flex xs6>
                        <v-btn color="deep-orange lighten-3" block @click="prepareRegister" depressed >Register</v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Login",
        data() {
            return {
                valid: true,
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                password: '',
                passwordRules: [
                    value => !!value || 'Password is required'
                ],
                show: false,
                fname: '',
                lname: '',
                newEmail: '',
                phone: '',
                newPassword: '',
                newPassword_c: '',
                dialog: false


            }
        },
        methods: {
            ...mapActions(['login', 'register', 'details']),
            prepareLogin() {
                // TODO: Validate data
                var fd = new FormData();
                fd.append('email' , this.email)
                fd.append('password' , this.password)
                this.login(fd)
            },

            prepareRegister() {
                // TODO: Validate data
                 var fd = new FormData();
                 fd.append('fname' , this.fname)
                 fd.append('lname' , this.lname)
                 fd.append('email' , this.newEmail)
                 fd.append('phone' , this.phone)
                 fd.append('password' , this.newPassword)
                 fd.append('c_password' , this.newPassword_c)

                this.register(fd)

            },

        },
        computed: {
            ...mapGetters(['User', 'Token', 'LoadingUser', 'AuthErrors']),
        },
    }
</script>

<style scoped>

</style>