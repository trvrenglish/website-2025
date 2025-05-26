<script lang="ts">
	import LoginBox from '$lib/components/layout/LoginBox.svelte';
	import Banner from '$lib/components/layout/Banner.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="page-wrap min-h-screen bg-black text-white">
	<div id="body">
		<LoginBox />
		<Banner />
		{@render children()}
	</div>
</div>
