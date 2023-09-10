import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import 'virtual:svg-icons-register'
import '@/assets/styles/index.less'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app').$nextTick(() => {
  // Remove Preload scripts loading
  postMessage({ payload: 'removeLoading' }, '*')

  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
