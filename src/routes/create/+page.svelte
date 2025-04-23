<script lang="ts">
	import { CirclePlus, CircleX } from 'lucide-svelte';
	import { Button, TextField } from 'm3-svelte';

	let ingredients: string[] = [];
	let newVal = '';

	async function createRecipe() {
		if (ingredients.length === 0) {
			alert('Please add at least one ingredient.');
			return;
		}
		console.log('Creating recipe with ingredients:', ingredients);
		// Add your logic to create a recipe here
		// curl -X POST -H "Content-Type: application/json" -d '{"ingredients": ["chicken", "rice", "soy sauce", "ginger", "garlic"]}' http://127.0.0.1:8080/recipe
		await fetch('http://127.0.0.1:8080/generate_recipe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ ingredients })
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
				alert('Recipe created successfully!');
				window.location.href = `/recipes/${data.data.recipe_id}`;
			})
			.catch((error) => {
				console.error('Error:', error);
				alert('Failed to create recipe.');
			});
	}
</script>

<div class="mt-8">
	{#each ingredients as val, i}
		<div class="my-2 px-15">
			<div class="flex flex-row items-center justify-between rounded-lg bg-[#B58C72] px-4 py-2">
				<div class="">{val}</div>
				<Button
					type="text"
					iconType="full"
					on:click={() => {
						ingredients = ingredients.filter((_, index) => index !== i);
					}}
				>
					<CircleX />
				</Button>
			</div>
		</div>
	{/each}

	{#if ingredients.length == 0}
		<div class="mb-8 text-center">Add Ingredients</div>
	{/if}
	<div class="my-2 flex flex-row items-center justify-center px-15">
		<TextField name="Enter Ingredient" bind:value={newVal} />
		<Button
			type="text"
			iconType="full"
			on:click={() => {
				if (newVal.trim() === '') {
					return;
				}
				ingredients = [...ingredients, newVal];
				newVal = ''; // Clear the input field after adding
			}}
		>
			<CirclePlus />
		</Button>
	</div>

	<div class="absolute right-7 bottom-10 z-10">
		<button
			class="flex h-7 w-13 items-center justify-center rounded-lg bg-blue-500 p-4 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
			onclick={createRecipe}
			aria-label="Add Item"
		>
			Generate
		</button>
	</div>
</div>
