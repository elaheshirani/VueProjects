<template>
  <div class="row">
    <app-quote v-for="(item, index) in quotes" v-bind:key="index" @click.native="deleteQuote(index)">{{ item }}</app-quote>
  </div>
</template>

<script>
import Quote from "@/components/Quote";
export default {
  name: "GridQoute",
  props : ['quotes'],
  components : {
    appQuote : Quote
  },
  methods : {
    deleteQuote : function (index){
       this.$emit("deleteQuote", index);
    }
  }
}
</script>

<style scoped>

</style>