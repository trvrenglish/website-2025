let currentPage = $state('news');

export function getCurrentPage(): string {
	return currentPage;
}

export function updateCurrentPage(newPage: string) {
	currentPage = newPage;
	document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' });
}
