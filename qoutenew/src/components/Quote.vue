<template>
  <div class="col-md-4">
    <b-card class="quote">
      <b-card-body >
        <slot></slot>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
name: "Quote"
}
</script>

<style scoped>
.panel-body{
  font-family: 'Arizonia', cursive;
  font-size:24px;
  color:#6e6e6e
}
.quote {
  cursor: pointer;
}
.quote:hover{
  background-color: #ffe2e2;
}
</style>