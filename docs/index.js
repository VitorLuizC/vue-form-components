import Vue from 'vue'
import App from './App'
import Form from '@components'

Vue.use(Form)

const render = (λ) => λ(App)

const app = new Vue({
  el: '#app',
  render
})

global.EventBus = app
