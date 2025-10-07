<script>
	import { updateCurrentPage } from '$lib/utils/page.svelte';
</script>

<dt>
	<span class="newsdate">Updated 07-02-25</span><span class="news-title">My Favorite Recipes</span>
</dt>
<dd>
	<table width="100%">
		<tbody
			><tr>
				<td style="text-align: justify; vertical-align: top;"
					><p>
						<a href="https://www.allrecipes.com/marry-me-chicken-soup-recipe-8421914"
							>"Wife me up" soup</a
						>
					</p>
					<p>
						<a
							href="https://www.heinens.com/recipes/marinated-lamb-chops-with-mint-pomegranate-chimichurri/"
							>Marinated Lamb Chops with Mint Pomegranate Chicken</a
						>
					</p>
					<p>
						<a href="https://spicedblog.com/lobster-linguine-lemon-garlic-sauce/"
							>Lobster Linguine with Lemon Garlic Sauce</a
						>
					</p>
				</td><td style="padding-left: 1em; text-align: right; vertical-align: top;">
					<img width="50" height="50" src="/icons/chicken.gif" alt="An evil chicken" />
				</td></tr
			></tbody
		>
	</table>
	<div style="margin-top: 0.5em;">
		<a href={null} onclick={() => updateCurrentPage('news')}>Back to home</a>
	</div>
</dd>
