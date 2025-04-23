<script lang="ts">
	import Floating from '$lib/components/Floating.svelte';
	import { CardClickable } from 'm3-svelte';
	import { onMount } from 'svelte';

	let recipes: { recipe_id: Number; ingredients: string[]; recipe: String; title: String }[] = [];
	onMount(async () => {
		// This will run when the component is mounted
		console.log('Component mounted');
		const res = await fetch('http://127.0.0.1:8080/recipes');
		const data = await res.json();
		recipes = data;
		console.log(data);
	});
	function onClick() {
		console.log('showModel');
	}
</script>

<div class="mt-8">
	{#each recipes as recipe}
		<a href={`/recipes/${recipe.recipe_id}`}>
			<div
				class="mx-4 mb-4 flex max-h-30 flex-col justify-start rounded-lg bg-[#B58C72] px-4 py-4 hover:bg-[#b58c72c2]"
			>
				<div><span class="text-lg text-black">{recipe.title}</span></div>
				<div class="flex flex-col">
					<span class="text-sm text-gray-800">Ingredients: </span>
					{#each recipe.ingredients as ingredient, i}
						<span class="text-sm text-gray-700">{ingredient}</span>
					{/each}
				</div>
			</div>
		</a>
	{/each}
	<a href="/create">
		<Floating {onClick}></Floating>
	</a>
</div>
