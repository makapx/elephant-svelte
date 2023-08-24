<script>
	import Tasklist from "./Tasklist.svelte";
	import CategoryExplorer from "./CategoryExplorer.svelte";
</script>
<svelte:head>
	<title>Elephant - Homepage</title>
	<meta name="description" content="Elephant - TODO list and activity tracker" />
</svelte:head>

<section>
	<CategoryExplorer />
	<Tasklist />
</section>