<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h3>User Details</h3>
        <div class="mb-3"> ID : {{ $route.params.id }}</div>
        <router-link
            tag="b-button"
            variant="warning"
            :to="'/user/' + $route.params.id + '/edit'">Edit User</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>