<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote"
}
</script>

<style scoped>
  div{
    border:1px solid #ccc;
    box-shadow: 1px 1px 2px;
    width:50%;
    margin: 20px auto;
  }

  .title{
    color:red;
    font-weight: bold;
  }
</style>