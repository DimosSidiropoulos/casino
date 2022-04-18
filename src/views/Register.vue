<template>
  <div>
    <h1 class="font-bold mt-10 text-4xl">
      Welcome to the <span class="text-red-500">Lottery</span>
    </h1>
    <div class="flex justify-center mt-20">
      <form
        @submit.prevent="pressed"
        class="flex flex-col justify-center items-center mt-20"
      >
        <h1 class="font-bold text-3xl font-display">Register</h1>
        <div class="">
          <input
            class="
              email
              pl-8
              border-b-2
              font-display
              text-l
              m-5
              mt-10
              focus:border-red-500
              outline-none
              transition-all
              duration-500
            "
            type="email"
            name="password"
            v-model="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            class="
              password
              pl-8
              border-b-2
              font-display
              capitalize
              text-l
              m-5
              focus:border-red-500
              outline-none
              transition-all
              duration-500
            "
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
          />
        </div>
        <button
          class="
            bg-red-500
            hover:bg-red-600
            text-white
            p-2
            font-bold
            rounded-lg
            hover:shadow-md
            transition
            duration-200
            mb-5
          "
          type="submit"
        >
          Register
        </button>
        <span
          >Already have an account? Click here to
          <router-link to="/signIn"
            ><span class="font-bold text-red-500 hover:text-red-600"
              >Sign In</span
            >
          </router-link></span
        >
      </form>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="success" class="font-bold mt-5">
      Successfully registered, please go ahead and
      <router-link to="/SignIn"
        ><span class="text-red-500">Sign In</span>
      </router-link>
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

<style scoped>
</style>
