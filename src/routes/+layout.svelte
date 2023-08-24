<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main class="container mx-auto pt-14 pb-20">
		<slot />
	</main>
	<Footer />
</div>