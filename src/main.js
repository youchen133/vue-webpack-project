import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ttt from './test'
console.log(ttt)
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

// console.log(SOMETHING, 989898)
