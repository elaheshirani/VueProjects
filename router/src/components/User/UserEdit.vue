<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h3>User Edit</h3>
        <p>Locale : {{ $route.params.query.locale}}</p>
        <p>Analytics : {{ $route.params.query.q }}</p>
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