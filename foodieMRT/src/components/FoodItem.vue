<script setup lang="ts">
  const listData = [
    {name: 'Tom', age: 18},
    {name: 'Jim', age: 20},
    {name: 'Lucy', age: 16},
    {name: 'Lucy', age: 16},
    {name: 'Lucy', age: 16},
    {name: 'Lucy', age: 16},
    {name: 'Lucy', age: 16},
    {name: 'Lucy', age: 16},
    {name: 'Lucy', age: 16},
    {name: 'Lucy', age: 16},
    {name: 'Lucy', age: 16},
  ]
</script>

<template>
  <div class="foodSection">
    <div class="foodItem" v-for="item in listData">{{item.name}}</div>
  </div>
</template>

<style scoped>

</style>