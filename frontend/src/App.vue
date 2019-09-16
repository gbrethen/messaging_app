<template>
  <v-app>
    <v-app-bar app>
      <v-btn text to="/">Messages</v-btn>
      <v-btn text to="/NewMessage">New Message</v-btn>
      <v-spacer></v-spacer>
      <v-btn text to="/Register" v-if="!$store.state.token">Register</v-btn>
      <v-btn text to="/Login" v-if="!$store.state.token">Login</v-btn>
      <v-btn text v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>
    </v-app-bar>

    <v-content>
      <br />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";

export default {
  name: "App",
  components: {
    Messages,
    NewMessage
  },
  data() {
    return {};
  }
};
</script>