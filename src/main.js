import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./assets/tailwind.css";

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

const db = getFirestore();

export { db };

let app;
const auth = getAuth();
onAuthStateChanged(auth, () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
