import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    doublePlusOne() {
      return this.doubleCount + 1
    },
  },
  actions: {
    countUp() {
      this.count++
    },
  },
})
