<script lang="ts">
	import type { CommandList } from '$lib/types'

	export let array: CommandList[]
</script>

<dl>
	{#each array as item}
		<dt><code>{item.command}</code></dt>
		<dd>{item.description}</dd>
	{/each}
</dl>

<style>
	dl {
		display: grid;
		grid-template-columns: max-content auto;
		column-gap: 1rem;
		row-gap: 0.5rem;
	}
</style>
