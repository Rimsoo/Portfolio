import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Popper from "vue3-popper";

const app = createApp(App);
app.component("Popper", Popper);
app.mount('#app');