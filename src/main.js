import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { initializeApp } from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA6_Rx30JTIJwNj9OdCibe0qCbIu4GB3xw",
  authDomain: "lottery-3d209.firebaseapp.com",
  projectId: "lottery-3d209",
  storageBucket: "lottery-3d209.appspot.com",
  messagingSenderId: "976588212847",
  appId: "1:976588212847:web:fce6f927340d92010f5b9a",
};

// Initialize Firebase

initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
