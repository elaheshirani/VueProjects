<template>
  <div id="app">
    <button @click="selectedComponenet = 'appQuote'">Quote</button>
    <button @click="selectedComponenet = 'appNew'">New</button>
    <button @click="selectedComponenet = 'appAuthor'">Author</button>
<!--    <app-author></app-author>
    <app-new></app-new>-->
    <component :is="selectedComponenet">
      <p>default componenet</p>
    </component>
<!--    <app-quote>
      <p slot="title">Wonderful Quote!</p>
      <h3>Description for Quote!</h3>
    </app-quote>-->
  </div>
</template>

<script>
import Quote from "@/components/Quote";
import New from "@/components/New";
import Author from "@/components/Author";

export default {
  data : function (){
    return {
      selectedComponenet : 'appQuote'
    }
  },
  name: 'App',
  components: {
    appQuote : Quote,
    appAuthor : Author,
    appNew : New
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
