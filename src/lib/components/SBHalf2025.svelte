<script lang="ts">
	import { updateCurrentPage } from '$lib/utils/page.svelte';

	const source = '/photo/sb_half_2025/';
</script>

<dt>
	<span class="newsdate">Updated 11-12-25</span><span class="news-title">SB Half Marathon 2025</span
	>
	<p>
		I ran my fourth half-marathon in Santa Barbara on Sunday. I only ran two 1-mile runs in
		preparation for it the week before. I didn't keep track of my time and I ran at a pretty slow
		pace taking breaks to talk to friends. Here's some photos I took along the way.
	</p>
</dt>
<dd style="display: flex; flex-direction: column; align-items: center;">
	<img
		src={source + 'dad_and_bike.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	My dad came to cheer me on. Thanks dad!
	<img
		src={source + 'dj_fam.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	DJ Javier & gang spotted on shoreline.
	<img
		src={source + 'micah.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	Found my friend Micah and exchanged a quick high-five.
	<img
		src={source + 'view_of_the_end.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	The end is in sight...
	<img
		src={source + 'finisher_selfie.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	That's all she wrote! Here's me 13.1 miles later.
	<img
		src={source + 'half_finishers.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	Me and my friend Dylan who brought me out here. He's insanely fast. Also I borrowed his shoes for this
	run because I forgot mine, lol.
	<img
		src={source + 'me_with_medal.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	Just me.
	<img
		src={source + 'hot_dog.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	Caleb ran straight to the hot dog stand.
	<img
		src={source + 'rock_gym.JPG'}
		alt="DJ Fam"
		width="100%"
		style="margin: 15px 15px; border: 2px solid #635537; background-color: #D5B982; min-height: 200px;"
	/>
	Concluded by paying one final visit to the SB Rock gym before it closes its doors for good. :( So many
	junior high & high school memories of mine were made on their walls. RIP
</dd>
<dt style="margin-top: 15px">
	<p>
		My knees and feet felt great pretty much the whole time running, though the final hill was a
		challenge. I was listening to an Alister McGrath podcast on CS Lewis' life which passed the time
		nicely. I stretched a little and didn't have any pain after. Best possible outcome. Looking
		forward to next year's race!
	</p>
</dt>
<dd style="display: flex; flex-direction: column; align-items: center;">
	<div style="margin-top: 0.5em;">
		<a href={null} onclick={() => updateCurrentPage('home')}>Back to home</a>
	</div>
</dd>
