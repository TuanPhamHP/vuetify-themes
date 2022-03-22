<template>
	<v-app>
		<v-main>
			<!-- SIDEBAR -->
			<Sidebar />
			<router-view v-slot="{ Component, route }">
				<transition name="fade" mode="out-in">
					<component :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</v-main>
	</v-app>
</template>

<script>
	import Sidebar from './components/layout/Sidebar.vue';

	export default {
		name: 'App',

		components: {
			Sidebar,
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
