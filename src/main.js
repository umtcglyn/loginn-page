import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import "@/assets/style.css"
import { appAxios } from './utils/appAxios';
import store from './store';


const app = createApp(App);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
