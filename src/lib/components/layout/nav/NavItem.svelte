<script lang="ts">
	import type { NavItem } from '$lib/interfaces/nav';
	import { updateCurrentPage } from '$lib/utils/page.svelte';

	interface Props {
		navItem: NavItem;
	}

	let { navItem }: Props = $props();
</script>

<fieldset class="menu" style="background-image: url({navItem.icon});">
	<legend>{navItem.title}</legend>
	<ul>
		{#each navItem.links as navLink (navLink.id)}
			<li style="list-style-image: url({navLink.icon});">
				{#if navLink.url}
					<a href={navLink.url}>{navLink.title}</a>
				{:else if navLink.page}
					<a href="#main" onclick={() => updateCurrentPage(navLink.page!)}>{navLink.title}</a>
				{/if}
			</li>
		{/each}
	</ul>
</fieldset>
