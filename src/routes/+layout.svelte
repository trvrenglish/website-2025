<script lang="ts">
	import LoginBox from '$lib/components/layout/LoginBox.svelte';
	import Banner from '$lib/components/layout/Banner.svelte';
	import '../app.css';
	import MusicPlayer from '$lib/components/layout/MusicPlayer.svelte';

	let { children } = $props();
</script>

<div class="page-wrap min-h-screen bg-black text-white">
	<div id="body">
		<LoginBox />
		<Banner />
		{@render children()}
		<MusicPlayer />
	</div>
</div>
