<template>
  <div id="app" class="container">
    <app-header :quoteCount="quotes.length" :maxQuote="maxQuote"></app-header>
    <app-new-quote @quoteAdded="addQuote"></app-new-quote>
    <app-grid-quote :quotes="quotes" @deleteQuote="deleteQuote"></app-grid-quote>
    <div class="row">
      <div class="col-md-12 text-center mt-4">
        <div class="alert alert-info">
          Info : Click on a Qoute to Delete it
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GridQoute from "@/components/GridQoute";
import NewQuote from "@/components/NewQuote";
import Header from "@/components/Header";
export default {
  name: 'App',
  data : function() {
    return {
      quotes : ['Just a Quote to see something'],
      maxQuote : 10
    }
  },
  components: {
    appGridQuote : GridQoute,
    appNewQuote : NewQuote,
    appHeader : Header
  },
  methods : {
    addQuote(quote) {
      this.quotes.push(quote);
    },
    deleteQuote(index){
      this.quotes.splice(index,1);
    }
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
