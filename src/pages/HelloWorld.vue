<template>
	<div class="hello">
		<h1 @click="show">{{ msg }}</h1>
		<p>
			For a guide and recipes on how to configure / customize this project,
			<br />
			check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">
				vue-cli documentation
			</a>
			.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
					target="_blank"
					rel="noopener"
				>
					babel
				</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
					target="_blank"
					rel="noopener"
				>
					eslint
				</a>
			</li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li>
				<a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
			</li>
			<li>
				<a href="https://forum.vuejs.org" target="_blank" rel="noopener">
					Forum
				</a>
			</li>
			<li>
				<a href="https://chat.vuejs.org" target="_blank" rel="noopener">
					Community Chat
				</a>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank" rel="noopener">
					Twitter
				</a>
			</li>
			<li>
				<a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
			</li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li>
				<a href="https://router.vuejs.org" target="_blank" rel="noopener">
					vue-router
				</a>
			</li>
			<li>
				<a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-devtools#vue-devtools"
					target="_blank"
					rel="noopener"
				>
					vue-devtools
				</a>
			</li>
			<li>
				<a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">
					vue-loader
				</a>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/awesome-vue"
					target="_blank"
					rel="noopener"
				>
					awesome-vue
				</a>
			</li>
		</ul>
		<!-- <Test></Test> -->
	</div>
</template>

<script>
// import Test from './test'
import { mapState } from 'vuex'
export default {
	name: 'HelloWorld',
	props: {
		tt: String
	},
	// components: {
	//   Test
	// },
	computed: {
		...mapState('test', ['msg'])
	},
	created() {
		console.log('created hello')
	},
	mounted() {
		console.log('mounted hello')
	},
	destroyed() {
		console.log('destoryed hello')
	},
	beforeDestroy() {
		console.log('before destory hello')
	},
	methods: {
		async show() {
			// let func = () => { }
			let arr = [1, 2, 4]
			arr.includes(3)
			// const s = 123132
			await Promise.resolve(1)
			let m = Object.assign({}, { a: 1 })
			if (m?.a) {
				console.log(m.a, 18888)
			}
			// console.log(klkl)
			// alert(s)
			this.$router.push({ name: 'Test' })
		}
	}
}
</script>

<style lang="scss" scoped>
.hello {
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
}
</style>
