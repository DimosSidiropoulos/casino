<template>
  <div>
    <Header />
    <h1 class="text-4xl font-normal mt-4 mb-2 text-green-500 font-bold">
      Draw
    </h1>
    <div class="grid grid-cols-2">
      <!-- <div v-for="number in winningNumbers" :key="number"> -->
      <h1>This is a test</h1>
    </div>
    <div class="flex">
      <div
        v-for="number in getNumbers"
        :key="number"
        class="
          bg-red-500
          text-2xl
          pt-4
          m-3
          w-16
          h-16
          rounded-full
          text-white
          font-bold
        "
      >
        {{ number }}
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      winningNumbers: [],
    };
  },
  methods: {},
  components: { Header },
  mounted() {
    console.log(this.getNumbers);
  },
  computed: {
    ...mapGetters({ getNumbers: ["getNumbers"] }),
  },
};
</script>

<style>
</style>