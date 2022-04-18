<template>
  <div>
    <Header />
    <h1 class="text-4xl mt-4 mb-2 font-bold">Draw</h1>
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
          :class="winningNumbers.includes(number) ? 'bg-green-600' : ''"
        >
          {{ number }}
        </div>
      </div>
    </div>
    <div v-if="winCount > 2" class="font-bold text-red-500 mt-10">
      Winning Bet
    </div>
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
          this.test.push(r);
          this.winCount++;
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
      // console.log(this.test);
      // console.log(this.winCount);
    },
    draw() {
      for (let i = 0; i < 5; i++) {
        let number = this.generateNumber();
        this.winningNumbers.push(number);
        // console.log(this.winningNumbers);
        this.winner(number);
        this.earningsCount;
        this.completed = true;
      }
    },
    generateNumber() {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * (10 - 1) + 1); //30
      } while (this.winningNumbers.includes(randomNumber));
      this.earningsCount();
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
    // console.log(this.getNumbers),
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
</style>