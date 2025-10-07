<script>
	import { navItems } from '$lib/data/nav';
	import NavItem from '$lib/components/layout/nav/NavItem.svelte';
</script>

<div class="left">
	{#each navItems as navItem (navItem.id)}
		<NavItem {navItem}></NavItem>
	{/each}
	<a href="https://www.youtube.com/watch?v=ZOtxTyJmxVI" target="_top"
		><img
			src="https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/gamewin/navbar_jagex.gif"
			alt="Jagex Software"
		/></a
	>
</div>
