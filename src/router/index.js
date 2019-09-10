import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const projectManage = r => require.ensure([], () => r(require('@/page/projectManage')), 'projectManage');
const moduleManage = r => require.ensure([], () => r(require('@/page/moduleManage')), 'moduleManage');
const userManage = r => require.ensure([], () => r(require('@/page/userManage')), 'userManage');
const systemSet = r => require.ensure([], () => r(require('@/page/systemSet')), 'systemSet');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/projectManage',
			component: projectManage,
			meta: ['项目管理'],
		},{
			path: '/moduleManage',
			component: moduleManage,
			meta: ['元件管理'],
		},{
			path: '/userManage',
			component: userManage,
			meta: ['用户管理'],
		},{
			path: '/systemSet',
			component: systemSet,
			meta: ['系统设置'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
