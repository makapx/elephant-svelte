<script>
    const toggleTheme = () =>{
        const html = document.querySelector('html');
        if(!html) return;

        if (html.dataset.theme === 'elephant') {
            html.dataset.theme = 'elephant-dark';
            return;
        }
        html.dataset.theme = 'elephant';
    };
</script>

<label class="swap swap-rotate">
	<input type="checkbox" on:click={toggleTheme}/>
	<i class="swap-off fill-current text-lg bx bxs-sun" />
	<i class="swap-on fill-current text-lg bx bxs-moon" />
</label>
