<script lang="ts">
	import type { NewsItem } from '$lib/interfaces/news';
	import { updateCurrentPage } from '$lib/utils/page.svelte';

	interface Props {
		newsItem: NewsItem;
	}

	let { newsItem }: Props = $props();
</script>

<dt>
	<span class="newsdate">{newsItem.date}</span><span class="news-title">{newsItem.title}</span>
</dt>
<dd>
	<table width="100%">
		<tbody
			><tr>
				<td style="text-align: justify; vertical-align: top;">{newsItem.text}</td>
				<td style="padding-left: 1em; text-align: right; vertical-align: top;">
					<img width="50" height="50" src={newsItem.icon} alt={newsItem.iconAlt} />
				</td></tr
			></tbody
		>
	</table>
	<div style="margin-bottom: .5em;">
		{#if newsItem.url}
			<a href={newsItem.url}>{newsItem.ctaText}</a>
		{:else if newsItem.page}
			<a href={null} onclick={() => updateCurrentPage(newsItem.page!)}>{newsItem.ctaText}</a>
		{/if}
	</div>
</dd>
