import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import mitt from 'mitt';
import 'aos/dist/aos.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App)

app.use(VueSweetalert2);

const eventBus = mitt();

app.provide('eventBus', eventBus);

app.use(router);

app.mount('#app');
