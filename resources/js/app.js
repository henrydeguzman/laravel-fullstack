require('./bootstrap');

// Get vue
window.Vue = require('vue');

// Import routes
import router from './router';

// Add Components
Vue.component('mainapp', require('./components/mainapp.vue').default)

// Load the Vue
const app = new Vue({
    el: '#app',
    router
})
