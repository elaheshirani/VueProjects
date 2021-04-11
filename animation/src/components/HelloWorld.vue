<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <b-button class="mb-4" variant="primary" @click="show = !show">Send</b-button>
        <b-alert show variant="primary" v-if="show">My Message</b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      show : true
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
