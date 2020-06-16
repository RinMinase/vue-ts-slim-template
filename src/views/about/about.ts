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
