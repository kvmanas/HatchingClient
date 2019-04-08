import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Production from '@/components/Production.vue'
import Barracks from '@/components/Barracks.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			components: {
				main: Home
			},
			children: [
				{
					path: '/',
					components: {
						game: Production
					}
				},
				{
					path: '/Barracks',
					components: {
						game: Barracks
					}
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
})
