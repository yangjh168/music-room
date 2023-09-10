import { defineStore } from 'pinia'

interface IState {
  isFullscreen: boolean
  lang: string
}

export const useAppStore = defineStore({
  id: 'app',
  state(): IState {
    return {
      isFullscreen: false,
      lang: 'zh',
    }
  },
  getters: {},
  actions: {},
})
