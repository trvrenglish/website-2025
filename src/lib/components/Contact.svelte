<script>
	import { updateCurrentPage } from '$lib/utils/page.svelte';
</script>

<dt>
	<span class="newsdate">Literally me</span><span class="news-title">Contact Me</span>
</dt>
<dd>
	<table width="100%">
		<tbody
			><tr>
				<td style="text-align: justify; vertical-align: top;"
					><p>
						Send me a strongly worded email at <a href="mailto:trvrenglish@gmail.com"
							>trvrenglish@gmail.com</a
						>
					</p>
					<p>If we're friends you likely already have my phone number :)</p>
				</td>

				<td style="padding-left: 1em; text-align: right; vertical-align: top;">
					<img width="50" height="50" src="/icons/boy.gif" alt="A boy icon" />
				</td></tr
			></tbody
		>
	</table>
	<div style="margin-top: 0.5em;">
		<a href={null} onclick={() => updateCurrentPage('news')}>Back to home</a>
	</div>
</dd>
