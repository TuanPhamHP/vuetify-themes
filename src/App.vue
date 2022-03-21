<template>
	<v-app>
		<v-main>
			<!-- SIDEBAR -->
			<Sidebar />
			<router-view></router-view>
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
