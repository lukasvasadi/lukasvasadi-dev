<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:image" content={data.meta.image} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		/* max-inline-size: var(--size-content-3); */
		max-inline-size: 90vw;
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: grid;
		grid-auto-rows: auto;
		grid-template-columns: 1fr 1fr;
		/* gap: var(--size-3); */
		gap: 1rem;
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 50px;
		}
	}

	@media (min-width: 600px) {
		article {
			max-inline-size: 800px;
		}

		.tags {
			display: flex;
			flex-direction: row;
		}
	}
</style>
