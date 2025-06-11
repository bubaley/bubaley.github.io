<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import { locale } from '$lib/stores/i18n';
	import { onMount } from 'svelte';
	
	let { children } = $props();
	
	onMount(() => {
		locale.init();
	});
</script>

<div class="min-h-screen bg-black text-white">
	<Navigation />
	<main class="pt-14">
		{@render children()}
	</main>
</div>
