import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import SignIn from "../views/SignIn.vue";
import Draw from "../views/Draw.vue";

import { getAuth } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/draw",
    name: "Draw",
    component: Draw,
    meta: {
      authRequired: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next({
        path: "/SignIn",
      });
    }
  } else {
    next();
  }
});

export default router;
