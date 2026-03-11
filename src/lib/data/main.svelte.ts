import type { NewsItem } from '$lib/interfaces/news';

export const newsItems: NewsItem[] = $state([
	{
		id: 3,
		title: 'New Website for Third Window!',
		date: '02-12-2026',
		icon: '/icons/drinker.gif',
		iconAlt: 'Drinking dude icon from OSRS',
		text: "I am most honored & graced to collaborate with my friends @ Third Window Brewing Co. in crafting their new website. If you haven't had their smashburger yet, what are you waiting for?",
		url: 'https://thirdwindowbrewing.com',
		ctaText: "Check out Third Window's website"
	},
	{
		id: 2,
		title: 'SB Half Marathon 2025',
		date: '11-09-2025',
		icon: '/icons/jog.gif',
		iconAlt: 'Jogging dude icon from OSRS',
		text: "Ran my fourth half-marathon in Santa Barbara on Sunday. Here's some photos I took...",
		page: 'sb-half-2025',
		ctaText: 'Read Post'
	},
	{
		id: 1,
		title: 'I made this website! Huzzah!',
		date: '05-25-2025',
		icon: '/icons/scroll.gif',
		iconAlt: 'Scroll icon from OSRS',
		text: 'I thought it would be fun to make my portfolio in the style of my favorite video game from my favorite era of the internet: 2006 Runescape. I made this project using Svelte, Typescript, and assets from OSRS.',
		url: 'https://github.com/trvrenglish/website-2025',
		ctaText: 'View Source Code Here'
	}
]);
