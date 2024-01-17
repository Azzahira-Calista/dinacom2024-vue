import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import mitt from 'mitt';
import 'aos/dist/aos.css'

const eventBus = mitt();
const app = createApp(App);

app.provide('eventBus', eventBus);

app.use(router);

app.mount('#app');
