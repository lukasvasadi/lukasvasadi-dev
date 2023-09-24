<script>
	export let str = ""
</script>

<h2>
    <a id={str.replace(/\s+/g, '-').toLowerCase()}>{str}</a>
</h2>

