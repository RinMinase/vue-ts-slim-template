<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button @click="testFn">Click!</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	data: () => ({
		test: "hello",
	}),
	methods: {
		testFn() {
			window.alert(this.test);
		},
	},
});
</script>

<style lang="scss" scoped>
div {
	h1 {
		color: blue,
	}
}
</style>
