import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import vuetify from "./plugins/vuetify";
import vueRouter from "vue-router";
import "@fortawesome/fontawesome-free/css/all.css";

import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";
import Message from "./components/Message";
import Register from "./components/Register";
import Login from "./components/Login";
Vue.config.productionTip = false;

Vue.use(vueRouter);

const routes = [
  { path: "/", component: Messages },
  { path: "/NewMessage", component: NewMessage },
  { path: "/Message/:id", component: Message },
  { path: "/Register", component: Register },
  { path: "/Login", component: Login }
];

const router = new vueRouter({ routes });

new Vue({
  router,
  store,
  vuetify,
  icons: {
    iconfont: "fa"
  },
  render: h => h(App)
}).$mount("#app");
