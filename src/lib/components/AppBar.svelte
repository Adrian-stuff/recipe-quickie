<script lang="ts">
	// Optional prop for setting the title dynamically
	export let title: string = 'AppName';
</script>

<header class=" sticky top-0 z-50 w-full bg-white text-black shadow-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-18 items-center justify-between">
			<div class="flex items-center">
				<slot name="left"></slot>
			</div>

			<div class=" items-center space-x-4 md:flex">
				<slot name="center">
					<a href="/" class=" text-lg font-light transition-opacity hover:opacity-80">
						{title}
					</a>
				</slot>
			</div>

			<div class="flex items-center space-x-2">
				<slot name="right"></slot>
				<div class="md:hidden">
					<slot name="mobile-menu-button"></slot>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	/* Add any essential styles here that are difficult or verbose with Tailwind */
	/* For a basic AppBar, usually no extra CSS is needed if Tailwind is set up correctly */
</style>
