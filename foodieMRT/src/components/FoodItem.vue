<script setup lang="ts">
  import { ref,watch } from 'vue'
  import {useCounterStore} from "@/stores/counter";
  const counterStore = useCounterStore();
  const radio1 = ref('台北捷運')
  const listData = [
    {name: '滷肉飯', age: 18},
    {name: '臭豆腐', age: 20},
    {name: '魚丸湯', age: 16},
    {name: '牛肉麵', age: 16},
    {name: '炒麵', age: 16},
    {name: '炒飯', age: 16},
    {name: '燒烤', age: 16},
    {name: '牛排', age: 16},
    {name: '炸雞', age: 16},
    {name: '飲料', age: 16},
    {name: '冰品', age: 16},
  ]
  const handleClick = (item) => {
    counterStore.food = item
    console.log(counterStore.food)
  };

  watch(radio1, (newCount, oldCount) => {
    // console.log(`Count changed from ${oldCount} to ${newCount}`);
    // 在這裡可以執行你想要的操作
    counterStore.area = radio1
    console.log(counterStore.area)
  });
</script>

<template>

  <div class="MRTradio">
    <el-radio-group v-model="radio1" size="large">
      <el-radio-button label="台北捷運" />
      <el-radio-button label="台中捷運" />
      <el-radio-button label="高雄捷運" />
    </el-radio-group>
  </div>

  <div class="foodSection">
    <div class="foodItem" @click="handleClick(item.name)" v-for="item in listData">{{item.name}}</div>
  </div>
</template>

<style scoped>

</style>