<template>
  <div class="row">
    <form >
      <div class="row">
        <div class="col-md-12">
          <label>Quote</label>
          <textarea class="input-group" rows="3" v-model="quote"></textarea>
        </div>
        <div class="col-md-12">
          <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewQuote",
  data: function () {
    return {
      quote: ''
    }
  },
  methods: {
    createNew() {
      this.$emit("quoteAdded", this.quote);
      this.quote = '';
    }
  }
}
</script>

<style scoped>

</style>