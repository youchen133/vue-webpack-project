import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.NODE_ENV === 'production' ? '/vue-webpack-project/' : '/',
	routes: [
		{
			path: '/',
			name: 'HelloVue',
			component: () =>
				import(/* webpackChunkName: "HelloVue" */ '../pages/HelloWorld')
		},
		{
			path: '/test',
			name: 'Test',
			component: () => import(/* webpackChunkName: "Test" */ '../pages/test')
		}
	]
})
