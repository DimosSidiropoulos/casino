<template>
  <div>
    <form @submit.prevent="pressed">
      Register
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
      <button type="submit">Register</button>
    </form>
    <div v-if="error">{{ error.message }}</div>
    <div v-if="success">
      Successfully registered, please go ahead and
      <router-link to="/SignIn">Sign In</router-link>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      success: false,
    };
  },
  methods: {
    pressed() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          //this.$router.push({ name: "Home" });
          this.success = true;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
