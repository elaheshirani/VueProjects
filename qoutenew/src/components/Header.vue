<template>
  <div>
    <h3>Quotes Added</h3>
    <b-progress :value="quoteCount" :max="maxQuote" show-progress animated></b-progress>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:[
    'quoteCount',
    'maxQuote'
  ],
}
</script>

<style scoped>

</style>