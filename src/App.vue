<template>
	<div id="app">
		<router-view class="router-con" />
		<router-nav class="router-nav" />
	</div>
</template>

<script>
import RouterNav from '@/components/indexNav/IndexNav';
export default {
	name: 'App',
	components: {
		RouterNav
	}
}
</script>

<style lang="scss">
	html, body {
		width: 100%;
		height: 100%;
	}
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		.router-con {
			flex: 1;
			overflow-y: scroll;
		}
		.router-nav {
			width: 100%;
			height: 0.5rem;
		}
	}
</style>
