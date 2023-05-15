import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

import Home from './views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', name: 'Home', component: Home }],
});
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
