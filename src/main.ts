import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import routes from "./routes";
import store from "./store";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

new Vue({
	router,
	store,
	render: (createElement) => createElement(App),
}).$mount("#app");
