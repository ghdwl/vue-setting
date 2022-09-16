import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App.vue';
import store from './store';
import router from './router';

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(store);
app.use(router);
app.mount('#app');
