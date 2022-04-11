<template>
  <div>
    <form @submit.prevent="pressed">
      Sign in
      <div class="email">
        <input
          type="email"
          name="password"
          v-model="email"
          placeholder="email"
        />
      </div>
      <div class="password">
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="password"
        />
      </div>
      <button type="submit">Sign In</button>
      <br />
      <span
        >Need an account? Click here to
        <router-link to="/Register">Register</router-link></span
      >
    </form>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    pressed() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style>
</style>