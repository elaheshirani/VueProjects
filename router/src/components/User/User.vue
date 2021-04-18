<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h4>User Page</h4>
        <b-button variant="info" class="mb-3 mt-3" @click="GoToHome">Go to Home</b-button>
        <router-view></router-view>
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