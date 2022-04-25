import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import wlGantt from "wl-gantt";

import "wl-gantt/lib/wl-gantt.css";
import "@/assets/style/global.scss";
Vue.use(ElementUI);

Vue.use(wlGantt);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
