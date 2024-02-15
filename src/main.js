import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { Inkline, components } from '@inkline/inkline';
import './css/variables/index.scss';
import '@inkline/inkline/css/index.scss';
import '@inkline/inkline/css/utilities.scss';

createApp(App).use(Inkline, { components }).mount('#app');
