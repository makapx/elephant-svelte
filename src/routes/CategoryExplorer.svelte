<script lang="ts">
	const categories = [
		{
			id: 1,
			slug: 'homework',
			name: 'Homework',
		},
		{
			id: 2,
			slug: 'grocery-shopping',
			name: 'Grocery shopping',
		}
	];
	
	const colorMap = [
		'badge-primary',
		'badge-accent',
		'badge-secondary'
	]
</script>
<section class="bg-base-100 text-neutral p-8">
	{#each categories as category, index}
		<a href="#">
			<div class={`badge ${colorMap[index % colorMap.length]} mx-1 p-4`} id={`${category.id}`}>
				{category.name}
			</div>
		</a>
	{/each}
</section>