import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import './style.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
  transition: 'Vue-Toastification__fade',
  maxToasts: 20,
  newestOnTop: false,
  toastClassName: 'toast',
  bodyClassName: 'toast-body',
  closeClassName: 'toast-close-button',
  progressClassName: 'toast-progress',
};

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use(Toast, options);

app.mount('#app');
