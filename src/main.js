import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'


createApp(App).use(router).use(VueAxios, axios).mount('#app')
