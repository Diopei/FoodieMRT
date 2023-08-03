<script setup lang="ts">
  import { ref,watch, } from 'vue'
  import {useCounterStore} from "@/stores/counter";
  const counterStore = useCounterStore();
  const count = ref(0)
  const radio3 = ref('板南線')
  counterStore.station = radio3

  const load = () => {
    if (count.value === 15) return
    count.value += 1
  }
  watch(radio3, (newCount, oldCount) => {
    // console.log(`Count changed from ${oldCount} to ${newCount}`);
    // 在這裡可以執行你想要的操作
    counterStore.station = radio3
    console.log(counterStore.station)
  });
</script>

<template>
  <div class="stationLine">
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button class="bl_line" label="板南線" />
      <el-radio-button class="r_line" label="淡水信義線" />
      <el-radio-button class="g_line" label="松山新店線" />
      <el-radio-button class="br_line" label="文湖線" />
      <el-radio-button class="o_line" label="中和新蘆線" />
      <el-radio-button class="y_line" label="環狀線" />
    </el-radio-group>
  </div>
  <div class="stationItem">
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>

<style scoped>

  .infinite-list {
    height: 600px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
  }
  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }

</style>