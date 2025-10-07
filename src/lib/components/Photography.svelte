<script lang="ts">
	import { updateCurrentPage } from '$lib/utils/page.svelte';

	const images = import.meta.glob('/static/photo/*.jpeg', { as: 'url', eager: true });
	const imageUrls = Object.values(images).map((url) => url.replace('/static/', '/'));

	function getAltText(url: string) {
		const filename = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
		return filename.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
	}
</script>

<dt>
	<span class="newsdate">Updated 09-30-25</span><span class="news-title">Photography</span>
	<p>Shot on Ricoh GR III</p>
</dt>
<dd style="display: flex; flex-direction: column; align-items: center;">
	{#each imageUrls as img (img)}
		<img
			src={img}
			alt={getAltText(img)}
			width="100%"
			style="margin-top:15px; border: 2px solid #635537;
"
		/>
	{/each}
	<div style="margin-top: 0.5em;">
		<a href={null} onclick={() => updateCurrentPage('news')}>Back to home</a>
	</div>
</dd>
