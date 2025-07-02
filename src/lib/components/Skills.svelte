<script>
	import { updateCurrentPage } from '$lib/utils/page.svelte';
	import posthog from 'posthog-js';

	posthog.capture('my event', { property: 'value' });
</script>

<span class="newsdate">Updated 06-24-25</span><span class="news-title">My Skills</span>
<div class="skills-container">
	<div class="skills-bgimg"></div>
</div>
<div style="margin-top: 0.5em;">
	<a href={null} onclick={() => updateCurrentPage('news')}>Back to home</a>
</div>
