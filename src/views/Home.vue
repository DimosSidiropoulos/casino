<template >
  <div>
    <Header />
    <h1 class="text-4xl font-normal mt-10 mb-2 font-bold">Home</h1>
    <div class="grid grid-cols-2 mt-10">
      <div class="grid grid-cols-3 sm:grid-cols-5">
        <div v-for="number in 30" :key="number">
          <button
            @click="picked(number)"
            class="
              bg-red-500
              hover:bg-red-400
              font-bold
              text-white
              m-3
              w-10
              h-10
              rounded-full
            "
          >
            {{ number }}
          </button>
        </div>
      </div>
      <div>
        <div v-for="number in numbersPicked" :key="number">
          <button
            class="
              bg-red-500
              font-bold
              text-white
              m-3
              w-16
              h-16
              rounded-full
              cursor-default
            "
          >
            {{ number }}
            <i
              @click="test(number)"
              class="fa-solid fa-circle-xmark cursor-pointer"
            />
          </button>
        </div>
        <div v-if="this.numbersPicked.length > 4">
          <button
            @click="submit"
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
              mt-10
            "
          >
            Submit
          </button>
        </div>
        <div v-if="max" class="font-bold mt-10">
          You cant pick any more numbers
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: { Header },

  data() {
    return {
      numbers: [],
      numbersPicked: [],
      max: false,
      ready: false,
    };
  },
  watch: {
    numbersPicked: {
      handler: "check",
    },
  },
  methods: {
    ...mapActions(["addNumbers"]),
    picked(number) {
      if (this.numbersPicked.includes(number)) {
        alert("you have picked this number already");
      } else {
        if (this.numbersPicked.length < 5) {
          this.numbersPicked.push(number);
        } else {
          this.max = true;
        }
      }
    },
    submit() {
      this.ready = true;
      console.log(this.ready);
      this.addNumbers([...this.numbersPicked]);
      this.$router.push("Draw");
    },
    test(number) {
      this.numbersPicked.splice(this.numbersPicked.indexOf(number), 1);
    },
    check() {
      if (this.numbersPicked.length < 6) {
        this.max = false;
      } else {
        this.max = true;
      }
    },
  },
  computed() {
    if (this.numbersPicked.length > 4) {
      this.ready = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.ready & (to.name == "Draw")) {
      alert("To enter the live draw you must first pick your numbers");
      return false;
    } else {
      next();
    }
  },
};
</script>
