import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const area = ref('台北捷運')
  const food = ref('')
  const station = ref('')
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, food, area, station, }
})
