<template>
  <nav class="bg-gray-300">
    <div class="flex items-center justify-between py-6 font-bold">
      <div>
        <router-link
          class="hover:text-red-500 trasition duration-300 mx-5"
          to="/"
          >Home</router-link
        >
        <router-link
          class="hover:text-red-500 trasition duration-300 mx-1.5"
          to="/draw"
          >Live Draw</router-link
        >
      </div>
      <button
        class="hover:text-red-500 trasition duration-300 mx-5 font-bold"
        @click="signOut"
      >
        <i class="fa-solid fa-user"></i>
        Logout
      </button>
    </div>
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