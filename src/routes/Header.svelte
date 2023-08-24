<script lang="ts">
	import ThemePicker from "./ThemePicker.svelte";
</script>

<header>
	<div class="navbar bg-neutral text-base-100 fixed">
		<div class="navbar-start">
			<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<i class='bx bx-menu-alt-left text-xl'></i>
			</label>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-neutral rounded-box w-52">
				<li>
					<a href="/about">About this project</a>
				</li>
				<li>
					<a href="/contacts">Contacts</a>
				</li>
			</ul>
		</div>
		</div>
		<div class="navbar-center">
			<a class="btn btn-ghost normal-case text-xl" href="/">
				Elephant 🐘
			</a>
		</div>
		<div class="navbar-end mr-4">
			<ThemePicker />
		</div>
	</div>
</header>