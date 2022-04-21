<template>
  <div>
    <Header />
    <h1 class="text-4xl mt-4 mb-2 font-bold">History</h1>
    <div v-for="(bet, index) in bets" :key="index">
      <div
        class="
          m-3
          bg-red-500
          text-white text-xl
          w-5/6
          md:w-3/6
          inline-block
          p-2
          rounded
          font-bold
        "
        :class="bet.status == 'Won' ? 'bg-green-600' : ''"
      >
        <i
          class="fa-solid fa-circle-xmark float-right cursor-pointer"
          @click="handleDelete(bet, index)"
        ></i>
        <div>Draw numbers: {{ bet.winningNumbers }}</div>
        <div>Status: {{ bet.status }}</div>
        <div>Total Amount won: {{ bet.earnings }}</div>
      </div>
    </div>
    <div v-if="empty" class="mt-10 text-xl text-red-500 font-bold">
      The History is empty
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

import { db } from "../main";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export default {
  data() {
    return {
      bets: [],
      empty: false,
    };
  },
  components: { Header },
  methods: {
    handleDelete(bet, index) {
      const docRef = doc(db, "bets", bet.id);
      this.bets.splice(index, 1);
      deleteDoc(docRef);
      if (this.bets.length === 0) {
        this.empty = true;
      }
      console.log(this.bets.length);
    },
  },
  created() {
    const colRef = collection(db, "bets");
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.bets.unshift({ ...doc.data(), id: doc.id });
      });
      if (this.bets.length === 0) {
        this.empty = true;
      }
    });
  },
};
</script>



