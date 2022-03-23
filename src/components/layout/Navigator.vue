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
					<v-list-item-header class="theme-controls">
						<p class="title font-weight-bold">Theme</p>
						<div class="theme-switch__wr">
							<v-btn
								depressed
								dense
								:color="currentTheme === 'light' ? 'btnActivePrim' : 'btnGrey'"
								@click="changeTheme('light')"
							>
								Light<v-icon class="ml-2" dark> mdi-white-balance-sunny </v-icon>
							</v-btn>
							<v-btn
								depressed
								dense
								:color="currentTheme === 'dark' ? 'btnActivePrim' : 'btnGrey'"
								@click="changeTheme('dark')"
							>
								Dark<v-icon class="ml-2" dark> mdi-weather-night </v-icon>
							</v-btn>
						</div>
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
		props: {
			changeTheme: { type: Function },
			currentTheme: {
				type: String,
				default: 'light',
			},
		},
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
			height: 100%;
			display: flex;
			flex-flow: column;
			justify-content: flex-start;
			align-items: flex-start;
			* {
				flex: unset !important;
			}
			.v-list-item-header {
				width: 100%;
				display: block;
				color: rgb(var(--v-theme-navigatorText));
				cursor: pointer;
				padding: 12px 20px;
				display: flex;

				&:not(.theme-controls):hover {
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
			.theme-controls {
				width: 100%;
				display: flex;
				flex-flow: column;
				margin-top: auto;
				justify-self: flex-end;
				.theme-switch__wr {
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>
