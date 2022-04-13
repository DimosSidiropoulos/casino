<template>
  <div>
    <Header />
    <h1 class="text-4xl font-normal mt-4 mb-2 text-green-500 font-bold">
      Draw
    </h1>
    <div class="grid grid-cols-2">
      <div class="flex">
        <div
          v-for="number in winningNumbers"
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
          :class="winner ? 'win' : ''"
        >
          {{ number }}
        </div>
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
    <div v-if="winCount > 2">Κέρδισες</div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      winningNumbers: [],
      test: [],
      winCount: 0,
    };
  },
  methods: {
    winner(number) {
      this.getNumbers.some((r) => {
        if (r == number) {
          this.test.push(r); //number?
          this.winCount++;
          return true;
        } else {
          return false;
        }
      });
      console.log(this.test);
      console.log(this.winCount);
    },
    draw() {
      for (let i = 0; i < 5; i++) {
        let number = this.generateNumber();
        this.winningNumbers.push(number);
        console.log(this.winningNumbers);
        this.winner(number);
      }
    },
    generateNumber() {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * (10 - 1) + 1); //30
      } while (this.winningNumbers.includes(randomNumber));
      return randomNumber;
    },
  },
  components: { Header },
  mounted() {
    console.log(this.getNumbers),
      setTimeout(() => {
        this.draw();
      }, 3000);
  },
  computed: {
    ...mapGetters({ getNumbers: ["getNumbers"] }),
  },
};
</script>

<style scoped>
.win {
  background-color: black;
}
</style>