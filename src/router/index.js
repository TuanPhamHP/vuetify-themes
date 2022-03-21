import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/views/HelloWorld.vue';
import Page from '@/views/Page.vue';
import Nav from '@/views/Nav.vue';
const history = createWebHistory();
const routes = [
	{
		path: '/',
		name: 'home',
		component: HelloWorld,
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
