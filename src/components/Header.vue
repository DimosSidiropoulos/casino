<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/draw">Live Draw</router-link>
    <button @click="signOut">Logout</button>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push({ name: "SignIn" });
      });
    },
  },
};
</script>

<style>
</style>