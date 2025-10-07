let currentPage = $state('home');

if (typeof window !== 'undefined') {
	const path = window.location.pathname.slice(1) || 'home';
	currentPage = path;
}

export function getCurrentPage(): string {
	return currentPage;
}

export function updateCurrentPage(newPage: string) {
	currentPage = newPage;

	window.history.pushState({}, '', `/${newPage}`);

	document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' });
}

if (typeof window !== 'undefined') {
	window.addEventListener('popstate', () => {
		const path = window.location.pathname.slice(1) || 'home';
		currentPage = path;
	});
}
