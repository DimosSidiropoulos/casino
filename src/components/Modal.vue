<template>
  <div>
    <h1>You have won {{ earnings }}</h1>
    <button>Save to History</button>
    <button @click="backHome">Go Back</button>
  </div>
</template>

<script>
export default {
  props: ["earnings"],
  methods: {
    backHome() {
      this.$router.push("Home");
    },
  },
};
</script>

<style>
</style>