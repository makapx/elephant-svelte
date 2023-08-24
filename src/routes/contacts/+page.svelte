<script>
	let isCopied = false;
	const copyToClipboard = (event) => {
		navigator.clipboard.writeText(event.target.dataset.val);
		isCopied = true;
		const timeout = setTimeout(() => {
			isCopied = false;
		}, 3000);
	};
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contacts" />
</svelte:head>

<div class="p-12">
	<h1 class="text-2xl font-bold mb-8">Contacts</h1>
	<div class="bg-base-100 p-8 shadow-sm max-w-lg">
		<div class="text-3xl flex gap-4">
			<a href="https://github.com/makapx" target="_blank">
				<div>
					<i class='bx bxl-github'></i>
				</div>
			</a>
			<button data-val="makapx" on:click={copyToClipboard}>
				<i class='bx bxl-telegram text-[#229ED9]' data-val="makapx"></i>
			</button>
		</div>
		<div class="text-sm text-success h-4">
			{#if isCopied}
				Copied to clipboard
			{/if}
		</div>
	</div>
</div>
