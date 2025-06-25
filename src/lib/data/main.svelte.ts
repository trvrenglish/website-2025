import type { NewsItem } from '$lib/interfaces/news';

export const newsItems: NewsItem[] = $state([
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
