<template>
  <div>
    <h1>User Details</h1>
    <h3>My name : {{ switchName() }}</h3><br>
    <h3>My age : {{ userAge }}</h3><br>
    <button @click="resetName">reset Name</button>
    <button @click="resetFn">reset Name2</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "UserDetail",
  props : {
    myName : {
      type : String
    },
    resetFn : Function,
    userAge : Number
  },
  methods : {
    switchName : function (){
      return this.myName.split("").reverse().join("");
    },
    resetName : function (){
      this.myName = 'Elahe';
      this.$emit('nameWasReset', this.myName);
    }
  },
  created() {
    eventBus.$on('ageWasEdited',(age) => {
      this.userAge = age;
    });
  }

}
</script>

<style scoped>
div{
  background-color: #c8b4f8;
}
</style>
