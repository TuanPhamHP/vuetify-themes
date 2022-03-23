import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Page from '@/views/Page.vue';
import Nav from '@/views/Nav.vue';
const history = createWebHistory();
const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			title: 'Home page',
		},
	},
	{
		path: '/page',
		name: 'page',
		component: Page,
		meta: {
			title: 'Home page',
		},
	},
	{
		path: '/nav',
		name: 'nav',
		component: Nav,
		meta: {
			title: 'Home page',
		},
	},

	//
];
const router = createRouter({
	history,
	routes,
});
export default router;
