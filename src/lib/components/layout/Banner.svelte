<script>
	import { updateCurrentPage } from '$lib/utils/page.svelte';
</script>

<a href={null} onclick={() => updateCurrentPage('news')}>
	<header class="banner">
		<div class="banner__options">
			<h1 class="banner__title">trvrenglish.com</h1>
		</div>
	</header>
</a>
