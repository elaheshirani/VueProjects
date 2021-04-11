<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col md="12">
          <b-form-input v-model="text"></b-form-input>
          <b-list-group>
            <b-list-group-item v-for="(index , key) in filterFruites" v-bind:key="key">{{ index }}</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data (){
    return {
      text : '',
      frutes : ['apple','banana','melon','mango']
    }
  },
  components: {

  },
  computed : {
    filterFruites () {
      return this.frutes.filter((element) => {
        return element.match(this.text);
      });
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
