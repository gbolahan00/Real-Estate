import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Bootstrap } from 'bootstrap/dist/css/bootstrap.min.css'
import "../public/styles.css";

createApp(App).use(router).use(Bootstrap).mount('#app')
