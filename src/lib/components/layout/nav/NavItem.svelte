<script lang="ts">
	import type { NavItem } from '$lib/interfaces/nav';

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
				<a href={navLink.url}>{navLink.title}</a>
			</li>
		{/each}
	</ul>
</fieldset>
