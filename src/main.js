import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

// import './styles.scss';
 import './app.css';

// require("nativescript-vue").registerElement('CardView', () => CardView);
require("nativescript-vue").registerElement("RichTextField", () => require("nativescript-rich-textfield").RichTextField );
// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
