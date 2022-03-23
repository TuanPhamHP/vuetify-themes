<template>
	<div class="app-navigator__container">
		<v-app-bar-nav-icon v-show="!drawerPermanent" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

		<div>
			<v-navigation-drawer
				class="app-main-drawer"
				v-model="drawer"
				:permanent="drawerPermanent"
				bottom
				temporary
				:rail="rail"
			>
				<v-list class="list-navigator">
					<v-list-item-header>
						<router-link class="router-link" to="/"> Home</router-link>
					</v-list-item-header>
					<v-list-item-header>
						<router-link class="router-link" to="/page"> Page</router-link>
					</v-list-item-header>
					<v-list-item-header>
						<router-link class="router-link" to="/nav"> Nav</router-link>
					</v-list-item-header>
				</v-list>
			</v-navigation-drawer>
		</div>
	</div>
</template>

<script>
	import { onMounted, ref } from 'vue';
	import { useDisplay } from 'vuetify';
	export default {
		setup() {
			const drawerPermanent = ref(true);
			const rail = ref(false);
			const setRail = boolean => {
				rail.value = !!boolean;
			};
			const setDrawerPermanent = boolean => {
				drawerPermanent.value = !!boolean;
			};
			onMounted(() => {
				const display = useDisplay();

				if (display.mobile.value) {
					setRail(false);
					setDrawerPermanent(false);
				}
				console.log(`Naviagtor component mounted.`); // announcement when sidebar mounted
			});
			return {
				drawerPermanent,
				rail,

				// fnc
				setRail,
				setDrawerPermanent,
			};
		},
		data() {
			return {
				drawer: true,
			};
		},
		mounted() {},
	};
</script>
<style lang="scss" scoped>
	.app-navigator__container {
		display: flex;
		flex-flow: column;
		padding: 40px 0;
		gap: 20px;
		/* width: 200px; */
		.list-navigator {
			.v-list-item-header {
				display: block;
				color: rgb(var(--v-theme-navigatorText));
				cursor: pointer;
				padding: 12px 20px;
				display: flex;

				&:hover {
					background-color: rgb(var(--v-theme-navigatorItemBackground__hover)) !important;
					color: rgb(var(--v-theme-navigatorText__hover)) !important;
				}
				.router-link {
					flex: 1 0 0;
					// using rgb when get global themes variables
					color: inherit !important;
					text-decoration: none;
				}
			}
		}
	}
</style>
