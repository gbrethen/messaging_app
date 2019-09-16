<template>
  <v-flex sm6 offset-sm3>
    <v-card class="mx-auto">
      <v-toolbar dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="userName" label="User Name" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                v-model="password"
                label="Password"
                :rules="[rules.required]"
                :type="show1 ? 'text' : 'password'"
                hint="At least 8 characters"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn class="mr-4" @click="register">Register</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-flex>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      password: "",
      show1: false,
      rules: {
        required: value => !!value || "Required."
      }
    };
  },
  methods: {
    async register() {
      this.$store.dispatch("register", {
        userName: this.userName,
        password: this.password
      });
      this.userName = "";
      this.password = "";
    }
  }
};
</script>