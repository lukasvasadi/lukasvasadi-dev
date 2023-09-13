<script>
    import { Info } from 'lucide-svelte'

	export let msg = ''
</script>


<p class="tag"><span><Info fill="#5d3af7" size=2rem /></span>{@html msg}</p>

<style>
    p {
        position: relative;
        margin-top: 2rem;
        padding: 1rem;
        border-radius: 10px;
        background: #5d3af7;
        color: var(--text-1-dark);
    }

    span {
        z-index: 1;
        position: absolute;
        top: -1.2rem;
        left: 0.5rem;
    }
</style>