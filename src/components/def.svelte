<script lang="ts">
	import type { CommandList } from '$lib/types'

	export let array: CommandList[]
</script>

<dl>
	{#each array as item}
		<dt><code>{item.cmd}</code></dt>
		<dd>{item.desc}</dd>
	{/each}
</dl>

<style>
	dl {
		display: grid;
		grid-template-columns: max-content auto;
		column-gap: 2rem;
		row-gap: 1rem;
		margin-top: 1rem;
	}

	dl dt {
		margin-top: 0;
	}
</style>
