import Vue from 'nativescript-vue';

import router from './router';

import store from './store';
import { CardView } from 'nativescript-cardview';
import './app.css';
// import { AD_SIZE, createBanner} from 'nativescript-admob';
 

// const testing = true;
// createBanner({
//   // if this 'view' property is not set, the banner is overlayed on the current top most view
//   // view: ..,
//   size: AD_SIZE.SMART_BANNER,

//   androidBannerId: testing
//       ? "ca-app-pub-5150231094870616~7581615975"  // global test banner id
//       : "ca-app-pub-5150231094870616/3119912190", // our registered banner id
//   // Android automatically adds the connected device as test device with testing:true, iOS does not
//   // iosTestDeviceIds: ["yourTestDeviceUDIDs", "canBeAddedHere"],
//   margins: {
//     // if both are set, top wins
//     // top: 10
 
//   },
//   keywords: ["foo", "bar"]
// }).then(
//     () => this.message = "Banner created",
//     error => this.message = "Error creating banner: " + error
// )



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
