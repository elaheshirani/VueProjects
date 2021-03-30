<template>
  <div>
    <h1>Edit User</h1>
    <h3>user Age : {{ userAge }}</h3>
    <button @click="editAge()">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "UserEdit",
  props : ['userAge'],
  methods : {
    editAge() {
      this.userAge = 30;
      //this.$emit('ageWasEdited',this.userAge);
      //eventBus.$emit('ageWasEdited',this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
}
</script>

<style scoped>
div{
  background-color: #c8b4f8;
  margin-top: 35px;
}
</style>
