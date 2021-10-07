import "@mdi/font/css/materialdesignicons.css";

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./plugins/vuetify-mask.ts";
import dayjs from "dayjs";
import cids from "cids-cgi/lib";

var utc = require("dayjs/plugin/utc");
var customParseFormat = require("dayjs/plugin/customParseFormat");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.extend(utc);
var advanced = require("dayjs/plugin/advancedFormat");
dayjs.extend(advanced);

Vue.config.productionTip = false;
Vue.prototype.dayjs = dayjs;
Vue.use(cids);

new Vue({
  router,
  vuetify,
  cids,
  render: (h) => h(App),
}).$mount("#app");
