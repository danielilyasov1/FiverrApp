import { createApp } from 'vue'
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import Vue from 'vue'
// import Vuesax from 'vuesax'
// import 'material-icons/iconfont/material-icons.css';


// style
import './styles/styles.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
// Vue.use(Vuesax)
// add.use(FontAwesomeIcon)

app.mount('#app')
