<template>
  <div>
    <Header />
    <h1 class="text-4xl font-normal mt-4 mb-2 font-bold">Draw</h1>
    <div class="grid grid-cols-2">
      <div class="md:flex justify-center">
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
        >
          {{ number }}
        </div>
      </div>
      <div class="md:flex justify-center">
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
          :class="winningNumbers.includes(number) ? 'bg-green-600' : ''"
        >
          {{ number }}
        </div>
      </div>
    </div>
    <div v-if="winCount > 2" class="font-bold text-xl mt-5">Winning Bet</div>
    <Modal
      :earnings="earnings"
      :winningNumbers="winningNumbers"
      :playerBet="getNumbers"
      :status="status"
      v-if="completed"
    />
    <div class="text-2xl font-bold fixed bottom-0 right-0 mr-10 mb-5">
      Money: <span>{{ earnings }} $</span>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      winningNumbers: [],
      test: [],
      winCount: 0,
      earnings: 0,
      completed: false,
      playing: true,
      status: "",
    };
  },
  methods: {
    winner(number) {
      this.getNumbers.some((r) => {
        if (r == number) {
          this.test.push(r); //number?
          this.winCount++;
          this.earningsCount();
          return true;
        } else {
          return false;
        }
      });
      if (this.winCount > 2) {
        this.status = "Won";
      } else {
        this.status = "Lost";
      }
    },
    async draw(t) {
      for (let i = 0; i < 5; i++) {
        await t(4000);
        let number = this.generateNumber();
        this.winningNumbers.push(number);

        this.winner(number);
      }
      this.completed = true;
    },
    generateNumber() {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * (7 - 1) + 1); //30
      } while (this.winningNumbers.includes(randomNumber));

      return randomNumber;
    },
    earningsCount() {
      switch (this.winCount) {
        case 3:
          this.earnings = 5;
          break;
        case 4:
          this.earnings = 10;
          break;
        case 5:
          this.earnings = 20;
          break;
        default:
          this.earnings = 0;
      }
    },
  },

  components: {
    Header,
    Modal,
  },
  mounted() {
    setTimeout(() => {
      const run = (ms) => new Promise((num) => setTimeout(num, ms));
      this.draw(run);
    }, 3000);
  },
  computed: {
    ...mapGetters({ getNumbers: ["getNumbers"] }),
  },
};
</script>

<style scoped>
</style>



