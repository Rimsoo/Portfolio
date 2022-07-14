import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Popper from 'vue3-popper'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import VerticalTimeline from "vue-vertical-timeline";

const app = createApp(App)
app.component("Popper", Popper)
app.use(VueCollapsiblePanel)
app.use(VerticalTimeline)
app.mount('#app')