<script setup lang="ts">
  import { ref } from 'vue'

  const radio = ref(1)

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

  <div class="MRTradio">
    <el-radio-group v-model="radio" justify="center">
      <el-radio :label="1">台北捷運</el-radio>
      <el-radio disabled :label="2">台中捷運</el-radio>
      <el-radio disabled :label="3">高雄捷運</el-radio>
    </el-radio-group>
  </div>

  <div class="foodSection">
    <div class="foodItem" v-for="item in listData">{{item.name}}</div>
  </div>
</template>

<style scoped>

</style>