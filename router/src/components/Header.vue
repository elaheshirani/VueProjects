<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <div>
          <b-nav pills>
            <router-link tag="b-nav-item" active-class="active" exact to="/">Home</router-link>
            <router-link to="/user" tag="b-nav-item" active-class="active">User</router-link>
          </b-nav>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>