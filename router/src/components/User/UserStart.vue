<template>
  <b-container>
    <b-row>
      <b-col md="12" >
        <h5 class="mb-4">User start</h5>
        <b-list-group>
          <router-link to="user/1" tag="b-list-group-item" >User 1</router-link>
          <router-link to="user/2" tag="b-list-group-item"  active>User 2</router-link>
          <router-link to="user/3" tag="b-list-group-item" >User 3</router-link>
        </b-list-group>
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