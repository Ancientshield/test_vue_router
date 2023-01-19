import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../components/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../components/About.vue'),
		/* 只在 router 定義完 child component 沒用，畫面會 crash */
		children: [
			{
				path: 'html',
				component: () => import('../components/Html.vue'),
			},
			{
				path: 'css',
				component: () => import('../components/CSS.vue'),
			},
			{
				path: 'javascript',
				component: () => import('../components/Javascript.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
