<template>
	<div class="main-page-view">
		<p>Hallo</p>
		<p v-if="title">tada:{{ title }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: process.env.VITE_TITLE, // as if your .env file has VITE_TITLE params
			};
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.main-page-view {
		background: #09bdff;
	}
</style>
