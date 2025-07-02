export const ssr = false;
export const prerender = true;

import posthog from 'posthog-js';
import { browser } from '$app/environment';

const PUBLIC_POSTHOG_TOKEN = import.meta.env.VITE_POSTHOG_TOKEN;

export const load = async () => {
	if (browser) {
		posthog.init(PUBLIC_POSTHOG_TOKEN, {
			api_host: 'https://us.i.posthog.com',
			defaults: '2025-05-24',
			person_profiles: 'identified_only'
		});
	}

	return;
};
