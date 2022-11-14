<template>
  <div id="app">
    <div id="header" :style=" this.$store.state.win ? {background : this.$store.state.pickedColor} : '' ">
      <h1>
        The Great <br>
        <span id="colorDisplay">{{this.$store.state.pickedColor != ''? this.$store.state.pickedColor : 'RGB' }} </span>
        <br>
        Guessing Game
      </h1>  
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./componentes/Navbar.vue";
export default {
  name: "App",

  components: {
    Navbar,
  },
  data() {
    return {
    };
  },
  methods: {
    toggleHeader(event){
        this.win = event
      },
  },
};
</script>

<style>
#app {
  background: #232323;

  font-family: "Montserrat", "Avenir";
}
body {
  background-color: #232323;
  margin-top: -20px;

  font-family: "Montserrat", "Avenir";
}
#header {
  transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
}
h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}

#colorDisplay {
  font-size: 200%;
}
</style>

