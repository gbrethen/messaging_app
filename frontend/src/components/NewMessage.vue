<template>
  <v-flex sm6 offset-sm3>
    <v-card class="mx-auto">
      <v-toolbar dark>
        <v-toolbar-title>New Message</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="messageBody" label="Message" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn class="mr-4" @click="submit">submit</v-btn>
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
      messageBody: ""
    };
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch("newMessage", this.messageBody);
        this.messageBody = "";
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>