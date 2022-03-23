<template>
	<v-app :theme="currentTheme" class="app-container">
		<v-main id="mainContainer">
			<!-- Navigator -->
			<Navigator :changeTheme="changeTheme" :currentTheme="currentTheme" />
			<!-- Route view -->
			<router-view v-slot="{ Component, route }" class="page-route-view">
				<transition name="fade" mode="out-in">
					<component :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</v-main>
	</v-app>
</template>

<script>
	import { ref } from 'vue';
	import Navigator from './components/layout/Navigator.vue';

	export default {
		setup() {
			const defaultTheme = 'light'; // setup default theme
			const cachedTheme = localStorage.getItem('app-theme') || defaultTheme;
			// 'currentTheme' should be match with listed key in 'themes' obj which decleare in ur plugins/vuetify.js file.
			const currentTheme = ref(cachedTheme);
			const changeTheme = themeName => {
				localStorage.setItem('app-theme', themeName);
				currentTheme.value = themeName;
			};
			return {
				currentTheme,
				//
				changeTheme,
			};
		},
		name: 'App',

		components: {
			Navigator,
		},

		data: () => ({
			//
			window: 1,
		}),
	};
</script>
<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.2s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
<style lang="scss">
	#mainContainer {
		.v-main__wrap {
			max-width: 100vw;
			display: flex;
			.page-route-view {
				width: 100%;
			}
		}
	}
</style>
