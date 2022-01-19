/**
 * The entry for the app served in the browser.
 */

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");
