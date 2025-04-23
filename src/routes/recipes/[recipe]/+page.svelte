<script lang="ts">
	import type { PageProps } from './$types';
	import SvelteMarkdown from 'svelte-markdown';

	let { data }: PageProps = $props();
</script>

<div class="markdown-content">
	<SvelteMarkdown source={data.data.recipe} />
</div>

<style>
	.markdown-content {
		font-size: 1.2rem; /* Larger font */
		line-height: 1.8; /* More spacing between lines */
		padding: 1rem;
	}

	.markdown-content h1,
	.markdown-content h2,
	.markdown-content h3 {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.markdown-content p {
		margin-bottom: 1rem;
	}

	.markdown-content ul,
	.markdown-content ol {
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}
</style>
