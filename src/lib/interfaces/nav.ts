export interface NavItem {
	id: number;
	title: string;
	icon: string;
	links: NavLink[];
}

export interface NavLink {
	id: number;
	title: string;
	icon: string;
	url?: string;
	page?: string;
}
