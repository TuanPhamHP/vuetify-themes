<template>
	<div class="app-sidebar">
		<router-link to="/"> Home '/' </router-link>
		<router-link to="/page"> Page '/page' </router-link>
		<router-link to="/nav"> Nav '/nav' </router-link>
	</div>
</template>

<script>
	import { onMounted } from 'vue';
	export default {
		setup() {
			onMounted(() => {
				alert('yay');
			});
		},
	};
</script>
<style lang="scss" scoped>
	.app-sidebar {
		display: flex;
		flex-flow: column;
		padding: 40px 0;
		gap: 20px;
	}
</style>
