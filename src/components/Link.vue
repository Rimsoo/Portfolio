<template>
	<a :href="'#'+props.id" @click.prevent="$emit('redirect', props.id)" class="text-blue-600 hover:underline">{{ props.name }}</a>
</template>

<script setup>
	const props = defineProps(['id', 'name'])
</script>