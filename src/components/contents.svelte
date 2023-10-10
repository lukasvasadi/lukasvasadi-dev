<script>
    import { tick } from 'svelte'

    async function getHeadings() {
        await tick()
        return document.querySelectorAll("h2")
    }

    let headings = getHeadings()
</script>

<h2>Contents</h2>

<ul>
    <!-- svelte-ignore empty-block -->
    {#await headings}
    {:then elements}
        {#each elements as e}
            {#if e.textContent != 'Contents'}
                {console.log(e)}
                <li><a href={`#${e.id}`}>{e.textContent}</a></li>
            {/if}
            <!-- <li><a href={`#${e.id}`}>{e.textContent}</a></li> -->
        {/each}
    {/await}
    
</ul>
