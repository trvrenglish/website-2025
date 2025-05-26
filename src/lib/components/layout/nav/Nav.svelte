<script>
	import { navItems } from '$lib/data/nav';
	import NavItem from '$lib/components/layout/nav/NavItem.svelte';
</script>

<div class="left">
	{#each navItems as navItem (navItem.id)}
		<NavItem {navItem}></NavItem>
	{/each}
	<!-- <fieldset -->
	<!-- 	class="menu" -->
	<!-- 	style="background-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/gamehelp.gif');" -->
	<!-- > -->
	<!-- 	<legend>Knowledge Base</legend> -->
	<!-- 	<ul> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/get_answer.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/" -->
	<!-- 				>Knowledge Base Home</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/get_started.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewarticle.ws?ref=main&amp;article_id=2058" -->
	<!-- 				>Getting started</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!---->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/rules.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewcategory.ws?ref=main&amp;cat_id=823" -->
	<!-- 				>Rules</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/manual.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewcategory.ws?ref=main&amp;cat_id=775" -->
	<!-- 				>Manual</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/questhelp.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=questhelp&amp;dest=index.ws">QuestHelp</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/parents_icon_small.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewcategory.ws?ref=main&amp;cat_id=884" -->
	<!-- 				>Parents' Guide</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/safety_guidelines.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewcategory.ws?ref=main&amp;cat_id=827" -->
	<!-- 				>Safety &amp; Security</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/customer_support.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewcategory.ws?ref=main&amp;cat_id=9" -->
	<!-- 				>Customer Support</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/quill.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewarticle.ws?ref=main&amp;article_id=2509" -->
	<!-- 				>Comment on our service</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!---->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/report_bug.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewcategory.ws?ref=main&amp;cat_id=139" -->
	<!-- 				>Report a bug/fault</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 	</ul> -->
	<!-- </fieldset> -->
	<!-- <fieldset -->
	<!-- 	class="menu" -->
	<!-- 	style="background-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/poll.gif');" -->
	<!-- > -->
	<!-- 	<legend>Latest Poll</legend> -->
	<!-- 	Which of the three combat styles do you favour? -->
	<!-- 	<ul> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/vote.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=poll&amp;dest=latestpoll.ws">Vote in this poll (Members only)</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/vote_grey.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=poll&amp;dest=list.ws">View previous polls</a> -->
	<!-- 		</li> -->
	<!-- 	</ul> -->
	<!-- </fieldset> -->
	<!-- <fieldset -->
	<!-- 	class="menu" -->
	<!-- 	style="background-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/webfeat.gif');" -->
	<!-- > -->
	<!-- 	<legend>Website Features</legend> -->
	<!-- 	<ul> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/worldmap.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="worldmap/worldmap.ws">World map</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/hiscore.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://hiscore.runescape.com/lang/en/aff/runescape/hiscores.ws" -->
	<!-- 				>Hiscores</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/comment.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://forum.runescape.com/lang/en/aff/runescape/forums.ws" -->
	<!-- 				>Forums</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/stories.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="varrock/varrockindex.ws">Stories and Letters</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/extra_files.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="files/files.ws">Downloads</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/shop.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="shop.ws">Jagex Shop</a> -->
	<!-- 		</li> -->
	<!-- 	</ul> -->
	<!-- </fieldset> -->
	<!-- <fieldset -->
	<!-- 	class="menu" -->
	<!-- 	style="background-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/membership.gif');" -->
	<!-- > -->
	<!-- 	<legend>Membership</legend> -->
	<!-- 	<ul> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/membership_benefits.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="members/members.ws">Membership Benefits</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/dollar.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="members/subscribe.ws">Start a new subscription</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/dollar_plus.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="members/subscribe.ws">Extend an existing subscription</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/dollar_grey.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/https://masterb.runescape.com/lang/en/aff/runescape/unsubscribe.ws" -->
	<!-- 				>Cancel an existing subscription</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 	</ul> -->
	<!-- </fieldset> -->
	<!-- <fieldset -->
	<!-- 	class="menu" -->
	<!-- 	style="background-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/accman.gif');" -->
	<!-- > -->
	<!-- 	<legend>Account Management</legend> -->
	<!-- 	<ul> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/messages.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=ticketing&amp;dest=inbox.ws">Read your messages from Jagex</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/password.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=password_history&amp;dest=passchange.html">Change your password</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/set_recovery.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=recovery_questions&amp;dest=add_recoveries.ws" -->
	<!-- 				>Set new recovery questions</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/cancel_recovery.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=recovery_questions&amp;dest=cancel_recoveries.ws" -->
	<!-- 				>Cancel recovery questions</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 	</ul> -->
	<!-- </fieldset> -->
	<!-- <fieldset -->
	<!-- 	class="menu" -->
	<!-- 	style="background-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/accrec.gif');" -->
	<!-- > -->
	<!-- 	<legend>Account Recovery</legend> -->
	<!-- 	<ul> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/recover.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/https://password.runescape.com/lang/en/aff/runescape/passsupport.html" -->
	<!-- 				>Recover a lost password</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/recover.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/https://password.runescape.com/lang/en/aff/runescape/passsupport.html" -->
	<!-- 				>Recover a locked account</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/track.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/https://password.runescape.com/lang/en/aff/runescape/tracker.cgi" -->
	<!-- 				>Track a recovery request</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/appeal_ban.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=offenceappeal&amp;dest=viewoffencehistory.ws" -->
	<!-- 				>Appeal an Offence/Ban</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 	</ul> -->
	<!-- </fieldset> -->
	<!-- <fieldset -->
	<!-- 	class="menu" -->
	<!-- 	style="background-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/pmod.gif');" -->
	<!-- > -->
	<!-- 	<legend>Player Moderators</legend> -->
	<!-- 	<ul> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/pmod_icon.gif');" -->
	<!-- 		> -->
	<!-- 			<a href="loginform.ws?mod=pmod&amp;dest=index.html">Visit the player moderator centre</a> -->
	<!-- 		</li> -->
	<!-- 		<li -->
	<!-- 			style="list-style-image: url('https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/title2/pmod_icon.gif');" -->
	<!-- 		> -->
	<!-- 			<a -->
	<!-- 				href="https://web.archive.org/web/20070205110736/http://kbase.runescape.com/lang/en/aff/runescape/viewcategory.ws?ref=main&amp;cat_id=868" -->
	<!-- 				>Find out about player mods</a -->
	<!-- 			> -->
	<!-- 		</li> -->
	<!-- 	</ul> -->
	<!-- 	<br /> -->
	<!-- </fieldset> -->
	<!-- <fieldset class="menu"> -->
	<!-- 	<legend>RuneScape Classic</legend> -->
	<!-- 	<ul> -->
	<!-- 		<li style="width: auto;"><a href="playclassic.ws">RuneScape Classic</a></li> -->
	<!-- 	</ul> -->
	<!-- </fieldset> -->
	<a href="https://web.archive.org/web/20070205110736/http://www.jagex.com/" target="_top"
		><img
			src="https://web.archive.org/web/20070205110736im_/http://www.runescape.com/lang/en/aff/runescape/img/gamewin/navbar_jagex.gif"
			alt="Jagex Software"
		/></a
	>
</div>
