import Vue from 'nativescript-vue';

import router from './router';

import store from './store';
import { CardView } from 'nativescript-cardview';
// import "./async-await";
// import './styles.scss';
 import './app.css';

// require("nativescript-vue").registerElement('CardView', () => CardView);
require("nativescript-vue").registerElement('CardView', () => CardView);
// require("nativescript-vue").registerElement("CardView", () => require("nativescript-cardView").CardView );
// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
