import type { NewsItem } from '$lib/interfaces/news';

export const newsItems: NewsItem[] = $state([
	{
		id: 2,
		title: 'SB Half Marathon 2025',
		date: '11-09-2025',
		icon: '/icons/jog.gif',
		iconAlt: 'Scroll icon from OSRS',
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
