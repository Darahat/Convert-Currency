import Vue from 'nativescript-vue';

import router from './router';

import store from './store';
import { CardView } from 'nativescript-cardview';
import './app.css';


require("nativescript-vue").registerElement('CardView', () => CardView);
 
var dialogs = require("ui/dialogs");
// Second argument is optional.
dialogs.prompt("Your message", "Default text").then(function (r) {
    console.log("Dialog result: " + r.result + ", text: " + r.text);
});
new Vue({

  router,

  store,

}).$start();
