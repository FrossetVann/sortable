import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import BoardComp from './views/BoardComp'
import RegPage from './views/RegPage'
import MainPage from './views/MainPage'
import TestGrpc from './components/TestGrpc'
import './theme.css'

const app = createApp(App)

app.component('BoardComp', BoardComp)
app.component('RegPage', RegPage)
app.component('MainPage', MainPage)
app.component('TestGrpc', TestGrpc)

app.use(router).mount('#app');