<template>
	<div class="main-page-view">
		<p>Hallo</p>
		<p>tada:{{ title }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: process.env.VITE_TITLE,
			};
		},
		mounted() {
			console.log(process);
		},
	};
</script>

<style lang="scss" scoped>
	.main-page-view {
		background: #09bdff;
		height: 900px;
	}
</style>
