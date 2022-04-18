import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import SignIn from "../views/SignIn.vue";
import Draw from "../views/Draw.vue";
import History from "../views/History.vue";

import { getAuth } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/signIn",
    name: "SignIn",
    alias:"/",
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
  {
    path: "/history",
    name: "History",
    component: History,
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
  const auth = getAuth().currentUser;

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth) {
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
