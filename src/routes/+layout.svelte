<script lang="ts">
	import LoginBox from '$lib/components/layout/LoginBox.svelte';
	import Banner from '$lib/components/layout/Banner.svelte';
	import '../app.css';
	import Nav from '$lib/components/layout/Nav.svelte';
	import Main from '$lib/components/layout/Main.svelte';

	let { children } = $props();
</script>

<div class="page-wrap min-h-screen bg-black text-white">
	<LoginBox />
	<Banner />
	<Nav />
	<Main />
	{@render children()}
</div>
