<script lang="ts">
	// Define the expected props using Svelte 5's $props rune
	// Add a type definition for better safety
	let { onClick } = $props<{ onClick: (show: boolean) => void }>();
</script>

<div class="absolute right-7 bottom-10 z-10">
	<button
		class="flex h-13 w-13 items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
		onclick={() => onClick(true)}
		aria-label="Add Item"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	</button>
</div>
