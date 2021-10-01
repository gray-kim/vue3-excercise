import { createApp } from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import App from './App.vue'
import './index.css'
import '@progress/kendo-theme-default/dist/all.css';

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(VueRouter);
app.mount('#app');