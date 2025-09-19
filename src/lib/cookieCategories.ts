import { CookieCategory } from '@/types';

export const COOKIE_CATEGORIES: Record<string, CookieCategory> = {
	essential: {
		name: 'Essential',
		description:
			'Required for the website to function properly. These cookies cannot be disabled.',
		required: true,
		cookies: [
			{
				name: 'session_id',
				purpose: 'Maintains user session',
				expiry: 'Session',
			},
			{
				name: 'csrf_token',
				purpose: 'Security token for form submissions',
				expiry: '24 hours',
			},
		],
	},
	analytics: {
		name: 'Analytics',
		description:
			'Help us understand how visitors interact with our website by collecting anonymous data.',
		required: false,
		cookies: [
			{
				name: '_ga',
				purpose: 'Google Analytics tracking',
				expiry: '2 years',
			},
			{
				name: '_gid',
				purpose: 'Google Analytics session tracking',
				expiry: '24 hours',
			},
		],
	},
	marketing: {
		name: 'Marketing',
		description:
			'Used to track visitors across websites to display relevant advertisements.',
		required: false,
		cookies: [
			{
				name: 'fb_pixel',
				purpose: 'Facebook advertising',
				expiry: '3 months',
			},
			{
				name: 'google_ads',
				purpose: 'Google Ads tracking',
				expiry: '90 days',
			},
		],
	},
	preferences: {
		name: 'Preferences',
		description:
			'Allow the website to remember choices you make (language, region, etc).',
		required: false,
		cookies: [
			{
				name: 'language',
				purpose: 'Stores language preference',
				expiry: '1 year',
			},
			{
				name: 'theme',
				purpose: 'Stores theme preference',
				expiry: '1 year',
			},
		],
	},
};
