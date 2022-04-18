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
          w-2/4
          inline-block
          p-2
          rounded
          font-bold
        "
        :class="bet.status == 'Won' ? 'bg-green-600' : ''"
      >
        Draw numbers: {{ bet.winningNumbers }} | Status: {{ bet.status }} |
        Total Amount won: {{ bet.earnings }}
        <i
          class="fa-solid fa-circle-xmark float-right cursor-pointer"
          @click="handleDelete(bet)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

import { db } from "../main";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      bets: [],
    };
  },
  components: { Header },
  created() {
    const colRef = collection(db, "bets");

    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc);
        this.bets.push({ ...doc.data() });
      });
    });
    console.log(this.bets);
  },
  methods: {
    handleDelete(bet) {
      //   const docRef = doc(db, "bets", bet.id);
      //   deleteDoc(docRef);
      //   //   console.log(bet.id);
      //   console.log(this.bets[0].key);
      console.log(bet);
    },
  },
};
</script>

