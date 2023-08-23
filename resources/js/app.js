import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();



/**
 * Vue
 */
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import Training from './components/Training.vue';
import Timer from './components/Timer.vue';


const app = createApp({});

app.component('training', Training);
app.component('timer', Timer);

app.mount("#app");
