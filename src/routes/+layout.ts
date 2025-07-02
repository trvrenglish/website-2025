export const ssr = false;
export const prerender = true;

import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		posthog.init('phc_IGpGy4rxHwyqPho5ATVa3MCiQIRZnC6F8QxuS9oo9GM', {
			api_host: 'https://us.i.posthog.com',
			defaults: '2025-05-24',
			person_profiles: 'identified_only'
		});
	}

	return;
};
