<script lang="ts">
	let tasks = [
		{
			id: 1,
			title: 'Task 1',
			description: 'Description 1',
			createdAt: '2021-10-01 00:00:00',
			updatedAt: '2021-10-01 00:00:00',
			deletedAt: null,
			completedAt: null,
			status: 'active',
			categoryId: 1,
			dueToDate: null
		},
		{
			id: 2,
			title: 'Task 2',
			description: 'Description 2',
			createdAt: '2021-10-01 00:00:00',
			updatedAt: '2021-10-01 00:00:00',
			deletedAt: null,
			completedAt: null,
			status: 'active',
			categoryId: 1,
			dueToDate: null
		}
	];

	const statusColorMap = {
		active: 'bg-primary',
		completed: 'bg-success',
		deleted: 'bg-error'
	};
</script>

<ul class="p-8 bg-base-100 text-neutral shadow-sm md:w-1/2">
	{#if tasks.length === 0}
		<div>No tasks yet. Try to add something</div>
	{/if}

	{#each tasks as task}
		<li id={`${task.id}`} class="flex justify-between mb-4">
			<div class="flex flex-col">
				<div>
					<span class={`rounded-full w-4 h-4 mr-2 inline-block ${statusColorMap[task.status]}`} />
					<span class="text-xl font-bold">
						{task.title}
					</span>
				</div>
				<div>
					{task.description}
				</div>
				<div class="text-xs">
					{new Date(task.createdAt).toLocaleDateString('en-us', {
						weekday: 'long',
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}
				</div>
			</div>
			<div id={`controls-${task.id}`} class="text-lg flex flex-col gap-2">
				<button class="btn btn-neutral btn-sm hover:btn-error rounded-full w-8 h-8">
					<i class="bx bxs-trash-alt" id={`delete-${task.id}`} />
				</button>
				<button class="btn btn-neutral btn-sm hover:btn-success rounded-full w-8 h-8">
					<i class="bx bx-check-double" id={`complete-${task.id}`} />
				</button>
			</div>
		</li>
	{/each}
</ul>
