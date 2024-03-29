import { RouteConfig } from "vue-router";

import Home from "./views/home/home.vue";

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () =>
			import(/* webpackChunkName: "about" */ "./views/about/about.vue"),
	},
];

export default routes;
