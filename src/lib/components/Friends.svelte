<script>
	import { updateCurrentPage } from '$lib/utils/page.svelte';
</script>

<dt>
	<span class="newsdate">Updated 06-24-25</span><span class="news-title">My Friends' Websites</span>
</dt>
<dd>
	<table width="100%">
		<tbody
			><tr>
				<td style="text-align: justify; vertical-align: top;"
					><p>
						<a href="https://caedonspilman.com/">caedonspilman.com</a>
					</p>
					<p>
						Caedon Spilman is an incredibly talented graphic designer and a true friend of mine.
					</p>
					<p>
						<a href="https://www.bayansurf.club/">bayansurf.club</a>
					</p>
					<p>Bayan Surf Club is the multi-disciplinary creative studio of D.J. Javier.</p>
					<p>
						<a href="https://nnimsstudios.com/">nnimsstudios.com</a>
					</p>
					<p>
						Noah Nims is smooth with the camera. Hire him for your next photo / video shoot in San
						Clemente area.
					</p>
					<p>
						<a href="https://www.emilyesslinger.com/">emilyesslinger.com</a>
					</p>
					<p>Hire Emily for your next creative project in San Diego!</p>
				</td>

				<td style="padding-left: 1em; text-align: right; vertical-align: top;">
					<img width="50" height="50" src="/icons/penguin.gif" alt="A nice penguin" />
				</td></tr
			></tbody
		>
	</table>
	<div style="margin-top: 0.5em;">
		<a href={null} onclick={() => updateCurrentPage('news')}>Back to home</a>
	</div>
</dd>
