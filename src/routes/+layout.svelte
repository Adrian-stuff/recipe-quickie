<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();
</script>

<div class="relative mx-auto min-h-screen max-w-[420px] bg-[#FFD48F]">
	<AppBar title={data.title}></AppBar>
	<div class="">{@render children()}</div>
</div>

<style>
</style>
