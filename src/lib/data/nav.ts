import type { NavItem } from '$lib/interfaces/nav';

export const navItems: NavItem[] = [
	{
		id: 1,
		title: 'My Work',
		icon: '/icons/quests.gif',
		links: [
			{
				id: 1,
				title: 'DialRight',
				icon: '/icons/signal.gif',
				url: 'https://calleridreputation.com/dialright/'
			},
			{
				id: 2,
				title: 'Westmont College',
				icon: '/icons/shield.gif',
				url: 'https://www.westmont.edu/'
			},
			{
				id: 3,
				title: 'Ojai Plant Works',
				icon: '/icons/tree.gif',
				url: 'https://www.ojaiplantworks.com/'
			},
			{
				id: 4,
				title: 'Santa Barbara Track Club',
				icon: '/icons/whistle.gif',
				url: 'https://www.santabarbaratc.com/'
			}
		]
	},
	{
		id: 2,
		title: 'About Me',
		icon: '/icons/boy.gif',
		links: [
			{
				id: 1,
				title: 'Skills',
				icon: '/icons/skills.gif',
				url: '/'
			},
			{
				id: 2,
				title: 'Contact',
				icon: '/icons/email.gif',
				url: '/'
			}
		]
	},
	{
		id: 3,
		title: 'Articles',
		icon: '/icons/scroll1.gif',
		links: [
			{
				id: 1,
				title: 'None yet!',
				icon: '/icons/questionmark.gif',
				url: '/'
			}
		]
	},
	{
		id: 4,
		title: 'Other',
		icon: '/icons/chicken.gif',
		links: [
			{
				id: 1,
				title: 'Stickers',
				icon: '/icons/questionmark.gif',
				url: '/'
			},
			{
				id: 2,
				title: 'Something else',
				icon: '/icons/questionmark.gif',
				url: '/'
			}
		]
	}
];
