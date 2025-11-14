<script lang="ts">
	import LoginBox from '$lib/components/layout/LoginBox.svelte';
	import Banner from '$lib/components/layout/Banner.svelte';
	import '../app.css';
	import MusicPlayer from '$lib/components/layout/MusicPlayer.svelte';

	let { children } = $props();

	const images = import.meta.glob('/static/photo/**/*.{jpeg, jpg, png, JPG, JPEG, PNG}', {
		as: 'url',
		eager: true
	});
	const imageUrls = Object.values(images).map((url) => url.replace('/static/', '/'));
</script>

<svelte:head>
	{#each imageUrls as img (img)}
		<link rel="preload" as="image" href={img} />
	{/each}
</svelte:head>

<div class="page-wrap min-h-screen bg-black text-white">
	<div id="body">
		<LoginBox />
		<Banner />
		{@render children()}
		<MusicPlayer />
	</div>
</div>
