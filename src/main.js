import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Popper from 'vue3-popper'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue';
import Test from './pages/Test.vue';

const routes = [
    {path: '/', component: HomePage},
    {path: '/test', component: Test},
]

const router = createRouter({
    base: '/Portfolio/',
    history: createWebHistory(),
    routes,
});

const app = createApp(App)
app.use(router)
app.component("Popper", Popper)
app.use(VueCollapsiblePanel)
app.mount('#app')