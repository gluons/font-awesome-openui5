<template lang="pug">
.container#demo
	#demo-container
	#wip
		Icon(type='hammer')
		|
		| Under Construction
</template>

<script>
export default {
	name: 'Demo'
};
</script>

<style lang="scss" scoped>
#demo {
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;

	#wip {
		font-size: 3rem;
		color: orange;
		text-align: center;
	}
}
</style>
