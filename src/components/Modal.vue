<template>
  <div>
    <div class="fixed inset-0 z-50 flex justify-center items-center">
      <div class="flex flex-col max-w-5xl rounded-lg shadow-lg bg-gray-100">
        <div class="p-5">
          <h3 class="text-2xl font-bold text-red-500">Lottery</h3>
        </div>
        <div class="p-6">
          <h1 class="font-bold text-xl">You have won {{ earnings }} $</h1>
        </div>
        <div class="p-6 flex justify-end items-center">
          <button
            @click="save"
            class="
              bg-red-500
              hover:bg-red-600
              text-white
              font-bold
              rounded-lg
              hover:shadow-md
              transition
              duration-200
              p-2
              m-2
            "
          >
            Save to History
          </button>
          <button
            @click="backHome"
            class="
              bg-red-500
              hover:bg-red-600
              text-white
              font-bold
              rounded-lg
              hover:shadow-md
              transition
              duration-200
              p-2
              m-2
            "
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import { db } from "../main";
import { addDoc, collection } from "firebase/firestore";

export default {
  props: ["earnings", "winningNumbers", "playerBet", "status"],
  methods: {
    backHome() {
      this.$router.push("/home");
    },
    async save() {
      try {
        const colRef = await addDoc(collection(db, "bets"), {
          earnings: this.earnings,
          winningNumbers: this.winningNumbers,
          playerBet: this.playerBet,
          status: this.status,
        });
        console.log(colRef.id);
      } catch (e) {
        console.error("Error: ", e);
      }
      this.$router.push("/home");
    },
  },
};
</script>




