<template>
  <section class="src-components-navbar">
    <div id="navigator">
      <button id="reset" @click="restart()">
        {{ this.$store.state.restartBtn }}
      </button>
      <span id="message">{{ this.$store.state.message }}</span>
      <button id="easy" :class="{ selected: !isHard }" @click="setEasy()">
        easy
      </button>
      <button id="hard" :class="{ selected: isHard }" @click="setHard()">
        hard
      </button>
    </div>
    <Juego />
  </section>
</template>

<script>
import Juego from "./Juego.vue";

export default {
  name: "src-components-navbar",
  props: [],
  components: {
    Juego,
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      colorCount: 6,
      isHard: true,
      colors: [],
    };
  },
  methods: {
    init() {
      this.setColors();
      let squaresLocal = [];
      for (let i = 0; i < this.colorCount; i++) {
        squaresLocal.push({ style: { backgroundColor: this.colors[i] } });
      }
      this.$store.dispatch("guardarSquares", squaresLocal);
    },
    setColors() {
      this.colors = this.crearColores(this.colorCount);
      this.$store.dispatch("guardarPickedColor", this.colors[this.pickColor()]);
    },
    crearColores(numbers) {
      let arr = [];
      for (let i = 0; i < numbers; i++)
        arr.push(this.createRandomStringColor());
      return arr;
    },
    createRandomStringColor() {
      let newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";
      return newColor;
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
    pickColor() {
      let quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },

    restart() {
      this.$store.dispatch("guardarMessage", "");
      this.$store.dispatch("msgRestartBtn", "New Colors");
      this.$store.dispatch("setWin", false);
      this.setColors();
      for (let i = 0; i < this.colorCount; i++) {
        this.$store.state.squares[i].style = {
          backgroundColor: this.colors[i],
        };
      }
    },
    setEasy() {
      if (this.isHard) {
        this.isHard = false;
        this.colorCount = 3;
        for (let i = 0; i < this.colorCount; i++) {
          let auxSquare = this.$store.state.squares[i + 3];
          auxSquare.style = { ...auxSquare.style, display: "none" };
        }
        this.restart();
      }
    },
    setHard() {
      if (!this.isHard) {
        this.isHard = true;
        this.colorCount = 6;
        for (let i = 0; i < this.colorCount; i++) {
          let auxSquare = this.$store.state.squares[i];
          auxSquare.style = { ...auxSquare.style, display: "block" };
        }
        this.restart();
      }
    },
  },
};
</script>

<style scoped lang="css">
#navigator {
    background: #ffffff;
    height: 29px;
    text-align: center;
    margin: -1;
    margin-top: -31px;
  }

  #message {
    color: black;
    display: inline-block;
    width: 20%;
  }

  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }

  button:hover {
    color: white;
    background-color: steelblue;
  }

  .selected {
    background-color: steelblue;
    color: white;
  }
</style>
