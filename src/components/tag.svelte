<script>
	import { Info, AlertCircle } from 'lucide-svelte'

	export let tagtype = 'info'
	export let msg = ''
</script>

<p class="tag {tagtype}">
	<span>
		{#if tagtype == 'info'}
			<Info fill="#5d3af7" size="34px" />
		{:else}
			<AlertCircle fill="#d6c13a" size="34px" />
		{/if}
	</span>{@html msg}
</p>

<style>
	p {
		position: relative;
		margin-top: 2rem;
		padding: 1rem;
		border-radius: 10px;
	}

	span {
		z-index: 1;
		position: absolute;
		top: -1.2rem;
		left: 0.5rem;
	}

	.info {
		background: #5d3af7;
		color: var(--text-1-dark);
	}

	.warning {
		background: #d6c13a;
		color: var(--text-1-light);
	}
</style>
