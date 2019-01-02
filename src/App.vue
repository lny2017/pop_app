<template>
	<div id="app">
		<router-view class="router-con" />
		<router-nav class="router-nav" v-if="routeFlag" />
	</div>
</template>

<script>
import RouterNav from '@/components/component/indexPage/IndexNav';
export default {
	name: 'App',
	components: {
		RouterNav
	},
	data () {
		return {
			routeFlag: true
		}
	},
	updated () {
		console.log(this.$route.name);
		if (this.$route.name === 'IndexPage' || this.$route.name === 'WantSale' || this.$route.name === 'Chat' || this.$route.name === 'Mine') {
			this.routeFlag = true;
		} else {
			this.routeFlag = false;
		}
	},
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
