<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h1>User Page</h1>
        <h3>Load ID : {{ id }}</h3>
        <b-button variant="info" @click="GoToHome">Go to Home</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "user",
  watch : {
    '$route'(to)
    {
      this.id = to.params.id;
    }
  },
  data () {
    return {
      id : this.$route.params.id
    }
  },
  methods : {
    GoToHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>