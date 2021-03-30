<template>
  <div class="user-container">
    <div class="user">
      <button @click="changeName">change name</button>
      <p>my name is : {{ name }}</p>
      <p>my age is : {{ age }}</p>
    </div>
    <app-user-detail
      :myName="name"
      @nameWasReset="name = $event"
      :resetFn="resetName"
      :userAge="age"></app-user-detail>
    <app-user-edit
      :userAge="age"
      @ageWasEdited="age = $event"
    ></app-user-edit>
  </div>
</template>

<script>
import UserEdit from "./UserEdit";
import UserDetail from "./UserDetail";
export default {
  data : function (){
    return {
      name : "Elahe",
      age : 27,
    };
  },
  methods : {
    changeName : function (){
      this.name = "Elahe Shirani";
    },
    resetName : function (){
      this.name = 'Elahe';
    }
  },
  components : {
    'app-user-edit': UserEdit,
    'app-user-detail' : UserDetail
  }
}
</script>

<style scoped>
.user-container{
   background-color: blueviolet;
   color: #fff;
   padding: 30px;
 }
.user{
  padding:10px
}
</style>
